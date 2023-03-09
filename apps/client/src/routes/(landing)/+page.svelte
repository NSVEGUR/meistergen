<script lang="ts">
	import Pravartak from '$lib/images/blog/pravartak.png';
	import HprCse from '$lib/images/blog/hprcse.png';
	import Matic from '$lib/images/blog/matic.png';
	import Llp from '$lib/images/blog/llp.png';
	import StartUpIndia from '$lib/images/blog/start-up-india.png';
	import Msme from '$lib/images/blog/msme.png';
	import Dipp from '$lib/images/blog/dipp.png';
	import Robotic from '$lib/images/blog/robotic.jpg';
	import Geores from '$lib/images/blog/geores.jpg';
	import Jave from '$lib/images/blog/jave.jpeg';
	import HomeAutomation from '$lib/images/blog/home-automation.jpeg';
	const associates = [Pravartak, HprCse, Matic, Llp];
	const recognizers = [StartUpIndia, Msme, Dipp];
</script>

<svelte:head>
	<title>Meistergen - we build your future</title>
</svelte:head>
<main>
	<section class="bg-[url('/src/lib/images/blog/hero.jpg')] w-screen bg-top bg-cover h-96">
		<div class="backdrop-blur w-full h-full flex flex-col items-center justify-center gap-4">
			<div>
				<h2 class="font-heading font-extrabold text-xl text-skin-muted">WELCOME TO</h2>
			</div>
			<div>
				<h1 class="text-center text-3xl font-heading font-black text-skin-base">
					MEISTER-<span class="text-accent">GEN</span>
				</h1>
				<span class="text-skin-muted"
					>Designing Innovative solutions for a better tommorrow</span
				>
			</div>
			<a
				class="p-2 text-skin-inverted border-2 bg-accent hover:bg-transparent hover:text-accent border-accent transition-all duration-200"
				href="/about">Who We Are <i class="ml-2 fas fa-chevron-right" /></a
			>
		</div>
	</section>
	<section class="p-3 mb-4">
		<h1 class="text-center font-bold text-3xl my-10 font-heading">ASSOCIATES</h1>
		<div class="grid w-full place-items-center grid-cols-4 -md:grid-cols-2 -sm:grid-cols-1">
			{#each associates as associate}
				<div
					class="group bg-dominant flex items-center justify-center p-5 hover:shadow-md cursor-pointer transition-all duration-200"
				>
					<img
						class="h-16 grayscale group-hover:grayscale-0"
						src={associate}
						alt={associate}
					/>
				</div>
			{/each}
		</div>
		<h1 class="text-center font-bold text-3xl my-10 font-heading">RECOGNISED BY</h1>
		<div
			class="grid w-full place-items-center grid-cols-3 gap-5 -md:grid-cols-2 -sm:grid-cols-1"
		>
			{#each recognizers as recognizer}
				<div
					class="group bg-dominant flex items-center justify-center p-5 hover:shadow-md cursor-pointer transition-all duration-200"
				>
					<img
						class="h-16 grayscale group-hover:grayscale-0"
						src={recognizer}
						alt={recognizer}
					/>
				</div>
			{/each}
		</div>
	</section>
	<section class="bg-muted">
		<div class="flex justify-start items-start -sm:flex-col">
			<div class="w-1/2 self-start pl-20 -sm:w-full -sm:pl-5">
				<img class="w-[75%] object-cover" src={Robotic} alt="robotic" />
			</div>
			<div class="w-1/2 flex flex-col gap-10 p-20 -sm:w-full -sm:p-5">
				<div class="flex flex-col gap-4">
					<div class="h-1 w-16 bg-accent" />
					<h1 class="font-heading font-black text-3xl">Vision</h1>
					<p>To bring life to technology that is accepted by ecosystem</p>
					<h1 class="font-heading font-black text-3xl">Mission</h1>
					<p>
						To create products that make a difference in people’s and make the world a
						better place
					</p>
				</div>
				<div class="border-t-[1px] border-light-muted" />
				<div class="grid grid-cols-2 gap-2 font-heading font-black -md:grid-cols-1">
					<div class="flex gap-3 items-center">
						<h1 class="text-accent text-6xl">9</h1>
						<span class="w-1/2">Years of team experience</span>
					</div>
					<div class="flex gap-3 items-center">
						<h1 class="text-accent text-6xl">9</h1>
						<span class="w-1/2">On going projects</span>
					</div>
					<div class="flex gap-3 items-center">
						<h1 class="text-accent text-6xl">1</h1>
						<span class="w-1/2">IITM, Pravartak Incubation</span>
					</div>
					<div class="flex gap-3 items-center">
						<h1 class="text-accent text-6xl">1</h1>
						<span class="w-1/2">IIITDM, HPRCSE Collaboration</span>
					</div>
				</div>
				<div class="border-t-[1px] border-light-muted" />
			</div>
		</div>
		<div class="flex justify-start -sm:flex-col -sm:gap-5">
			<div
				class="w-1/2 flex flex-col gap-4 items-start justify-start px-20 -sm:w-full -sm:px-5"
			>
				<div class="h-1 w-16 bg-accent" />
				<h1 class="font-heading font-black text-5xl">Our Expertise</h1>
				<span>Our expertise span across multiple fields, including</span>
				<ul class="flex flex-col gap-1 text-skin-muted list-disc pl-4">
					<li class="hover:text-accent hover:scale-105 transition-all duration-200">
						<a href="/">Geophysical Survey</a>
					</li>
					<li class="hover:text-accent hover:scale-105 transition-all duration-200">
						<a href="/">Home Automation</a>
					</li>
					<li class="hover:text-accent hover:scale-105 transition-all duration-200">
						<a href="/">IoT & Cloud</a>
					</li>
					<li class="hover:text-accent hover:scale-105 transition-all duration-200">
						<a href="/">Embedded Solutions</a>
					</li>
					<li class="hover:text-accent hover:scale-105 transition-all duration-200">
						<a href="/">FPGA & ASIC</a>
					</li>
					<li class="hover:text-accent hover:scale-105 transition-all duration-200">
						<a href="/">Web & App Development</a>
					</li>
					<li class="hover:text-accent hover:scale-105 transition-all duration-200">
						<a href="/">Software Solutions</a>
					</li>
				</ul>
			</div>
			<div class="w-1/2 px-20 flex flex-col gap-10 -sm:w-full -sm:px-5">
				<div class="flex gap-4 border-b-[1px] border-light-muted pb-5 -sm:flex-col">
					<h1 class="font-heading font-black text-2xl text-accent">2022</h1>
					<div class="flex flex-col gap-2">
						<h1 class="font-heading font-black text-2xl">
							GeoRes (Septic and Sewage Monitoring System)
						</h1>
						<p class="text-skin-muted leading-7">
							An innovative ERY-based solution that detects septic tank leak and
							sewage line block at an early stage for a safety and healthy environment
						</p>
					</div>
				</div>
				<div class="flex gap-4 border-b-[1px] border-light-muted pb-5 -sm:flex-col">
					<h1 class="font-heading font-black text-2xl text-accent">2022</h1>
					<div class="flex flex-col gap-2">
						<h1 class="font-heading font-black text-2xl">
							Cloud based Home Automation
						</h1>
						<p class="text-skin-muted leading-7">
							A unique solution that transforms standard home appliances into
							cloud-accessible IoT devices, enabling homeowners to control and monitor
							them remotely from any internet-enabled device. With this solution, we
							aim to make every home a smart home, without the need for expensive,
							specialized IoT equipment.
						</p>
					</div>
				</div>
				<div class="flex gap-4 border-b-[1px] border-light-muted pb-5 -sm:flex-col">
					<h1 class="font-heading font-black text-2xl text-accent">2022</h1>
					<div class="flex flex-col gap-2">
						<h1 class="font-heading font-black text-2xl">JAVE (Next Dimension OTT)</h1>
						<p class="text-skin-muted leading-7">
							Advanced OTT platform with character perspective experience for movies
							and web series.
						</p>
					</div>
				</div>
				<div class="flex gap-4 border-b-[1px] border-light-muted pb-5 -sm:flex-col">
					<h1 class="font-heading font-black text-2xl text-accent">2022</h1>
					<div class="flex flex-col gap-2">
						<h1 class="font-heading font-black text-2xl">
							Reconfigurable Steganographic System (FPGA)
						</h1>
						<p class="text-skin-muted leading-7">
							Real-Time Video watermarking system for steganography application.
							Reconfigurable IP that encodes the information in real-time for
							information security in Image / Video applications.
						</p>
					</div>
				</div>
				<div class="pb-20">
					<a
						class="border-2 border-accent text-accent p-2 hover:bg-accent hover:text-skin-inverted transition-all duration-200"
						href="/">More <i class="ml-2 far fa-hand-point-right" /></a
					>
				</div>
			</div>
		</div>
	</section>
	<section class="bg-dominant">
		<div class="relative w-full h-64 bg-[url(/src/lib/images/blog/meeting.jpg)] bg-cover">
			<div class="absolute inset-0 w-full h-full bg-black bg-opacity-40" />
			<div
				class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center flex-col"
			>
				<h1 class="font-secondary text-3xl font-black text-skin-inverted ">
					Meister-Gen <span class="text-accent font-heading">Technologies</span> Pvt.Ltd
				</h1>
				<p class="text-muted">The One where you can afford a reliable.</p>
			</div>
		</div>
		<div class="flex p-20 gap-10 -sm:flex-col -sm:p-5 -sm:mb-5">
			<div class="w-1/2 flex flex-col gap-10 self-end -sm:w-full -sm:self-start">
				<div class="h-1 w-16 bg-accent self-end -sm:self-start" />
				<h1 class="font-heading font-black text-5xl text-right -sm:text-left">
					Recent Updates
				</h1>
			</div>
			<div class="w-1/2 self-center -sm:w-full">
				<a
					class="border-2 border-accent text-accent p-2 hover:bg-accent hover:text-skin-inverted transition-all duration-200"
					href="/">View All <i class="ml-2 far fa-hand-point-right" /></a
				>
			</div>
		</div>
		<div class="grid grid-cols-2 p-20 gap-y-32 gap-x-10 -sm:grid-cols-1 -sm:p-5 -sm:gap-y-20">
			<div
				class="relative before:absolute before:-top-10 before:content-['\201C'] before:text-accent before:font-heading before:text-6xl before:font-black flex flex-col gap-4"
			>
				<p class="font-black text-lg">
					Cloud based septic tank health monitoring system successfully tested in IIITDM
					Kancheepuram
				</p>
				<div class="flex gap-2 items-center font-secondary font-black">
					<img class="w-10 h-10 object-cover rounded-full" src={Geores} alt="geores" />
					<span class="text-skin-muted">GEORES - VERSION 1 TESTED</span>
				</div>
			</div>
			<div
				class="relative before:absolute before:-top-10 before:content-['\201C'] before:text-accent before:font-heading before:text-6xl before:font-black flex flex-col gap-4"
			>
				<p class="font-black text-lg">
					Character perspective cinematic experience with an next dimensional OTT
					platform.
				</p>
				<div class="flex gap-2 items-center font-secondary font-black">
					<img class="w-10 h-10 object-cover rounded-full" src={Jave} alt="jave" />
					<span class="text-skin-muted">JAVE - PROTOTYPE TESTED</span>
				</div>
			</div>
			<div
				class="relative before:absolute before:-top-10 before:content-['\201C'] before:text-accent before:font-heading before:text-6xl before:font-black flex flex-col gap-4"
			>
				<p class="font-black text-lg">
					Reconfigurable home automation with cloud accessible solution for non IoT
					devices
				</p>
				<div class="flex gap-2 items-center font-secondary font-black">
					<img
						class="w-10 h-10 object-cover rounded-full"
						src={HomeAutomation}
						alt="home-automation"
					/>
					<span class="text-skin-muted">HOME AUTOMATION - VERSION 1 TESTED</span>
				</div>
			</div>
			<div
				class="relative before:absolute before:-top-10 before:content-['\201C'] before:text-accent before:font-heading before:text-6xl before:font-black flex flex-col gap-4"
			>
				<p class="font-black text-lg">
					Incubated in IITM Incubation Cell associated with Pravartak Technologies
					Foundation
				</p>
				<div class="flex gap-2 items-center font-secondary font-black">
					<img
						class="w-10 h-10 object-cover rounded-full"
						src={Pravartak}
						alt="pravartak"
					/>
					<span class="text-skin-muted">INCUBATED</span>
				</div>
			</div>
		</div>
	</section>
</main>
