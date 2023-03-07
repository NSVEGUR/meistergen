import { NextFunction, Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync.util';
import { prisma } from '../../server';

const getAvailable = catchAsync(async function (
	req: Request,
	res: Response,
	next: NextFunction
) {
	const requests = await prisma.serviceRequest.findMany({
		where: {
			approved: false
		},
		select: {
			uid: true,
			service: {
				select: {
					name: true
				}
			},
			user: {
				select: {
					email: true
				}
			}
		}
	});
	res.status(200).json({
		status: 200,
		message: 'Fetched service requests successfully',
		data: {
			requests
		}
	});
});

const getPersonal = catchAsync(async function (
	req: Request,
	res: Response,
	next: NextFunction
) {
	const requests = await prisma.serviceRequest.findMany({
		where: {
			approved: true,
			approvedBy: req.user.id
		},
		select: {
			uid: true,
			service: {
				select: {
					name: true
				}
			},
			user: {
				select: {
					email: true
				}
			}
		}
	});
	res.status(200).json({
		status: 200,
		message: 'Fetched service requests successfully',
		data: {
			requests
		}
	});
});

const getAll = catchAsync(async function (
	req: Request,
	res: Response,
	next: NextFunction
) {
	const available = await prisma.serviceRequest.findMany({
		where: {
			approved: false
		},
		select: {
			uid: true,
			service: {
				select: {
					name: true
				}
			},
			user: {
				select: {
					email: true
				}
			}
		}
	});
	const personal = await prisma.serviceRequest.findMany({
		where: {
			approved: true,
			approvedBy: req.user.id
		},
		select: {
			uid: true,
			service: {
				select: {
					name: true
				}
			},
			user: {
				select: {
					email: true
				}
			}
		}
	});
	res.status(200).json({
		status: 200,
		message: 'Fetched service requests successfully',
		data: {
			requests: {
				available,
				personal
			}
		}
	});
});

const getRequest = catchAsync(async function (
	req: Request<{}, {}, { email: string }>,
	res: Response,
	next: NextFunction
) {
	const request = await prisma.serviceRequest.findUnique({
		where: {
			id: req.serviceRequest.id
		},
		select: {
			uid: true,
			files: {
				select: {
					name: true,
					uid: true
				}
			},
			service: {
				select: {
					name: true,
					description: true
				}
			},
			user: {
				select: {
					email: true
				}
			}
		}
	});
	res.status(200).json({
		status: 200,
		message: 'Fetched service request successfully',
		data: {
			request
		}
	});
});

const approve = catchAsync(async function (
	req: Request<{}, {}, { email: string }>,
	res: Response,
	next: NextFunction
) {
	const request = await prisma.serviceRequest.update({
		where: {
			id: req.serviceRequest.id
		},
		data: {
			approved: true,
			approvedBy: req.user.id
		},
		select: {
			service: {
				select: {
					name: true,
					description: true
				}
			},
			user: {
				select: {
					email: true
				}
			}
		}
	});
	res.status(200).json({
		status: 200,
		message: 'Approved service request successfully',
		data: {
			request
		}
	});
});

const decline = catchAsync(async function (
	req: Request<{}, {}, { email: string }>,
	res: Response,
	next: NextFunction
) {
	const request = await prisma.serviceRequest.update({
		where: {
			id: req.serviceRequest.id
		},
		data: {
			approved: false,
			approvedBy: req.user.id
		},
		select: {
			service: {
				select: {
					name: true,
					description: true
				}
			},
			user: {
				select: {
					email: true
				}
			}
		}
	});
	res.status(200).json({
		status: 200,
		message: 'Declined service request successfully',
		data: {
			request
		}
	});
});

export default {
	getAvailable,
	getPersonal,
	getAll,
	getRequest,
	approve,
	decline
};
