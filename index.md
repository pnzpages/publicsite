---
title: political.nz
layout: home
description: '<strong>political.nz&nbsp</strong>is a new kind of political party on a mission to re-invent the way we do
politics in Aotearoa New Zealand'
image: assets/images/Beehive4.png
nav-menu: false 
---

<!-- Main -->
<div id="main">

	<!-- One -->
	<section id="one">
		<div class="inner">
			<header class="major">
				<h2>The political.nz project</h2>
			</header>
			{% capture 1_intro %}{% include_relative index_sections/1_intro.md %}{% endcapture %}
			{{ 1_intro | markdownify }}

		</div>
	</section>

	<!-- Two -->
	<section id="two" class="spotlights">
		<section>
			<span href="generic.html" class="image">
				<img src="{% link assets/images/storm_plane.jpg %}" alt="" data-position="center center" />
			</span>
			<div class="content">
				<div class="inner">
					<header class="major">
						<h3>Why?</h3>
					</header>
					{% capture 2_why %}{% include_relative index_sections/2_why.md %}{% endcapture %}
					{{ 2_why | markdownify }}

				</div>
			</div>
		</section>

		<section>
			<span href="generic.html" class="image">
				<img src="{% link assets/images/nuts_and_bolts.jpg %}" alt="" data-position="top center" />
			</span>
			<div class="content">
				<div class="inner">
					<header class="major">
						<h3>What?</h3>
					</header>
					{% capture 3_what_intro %}{% include_relative index_sections/3_what_intro.md %}{% endcapture %}
					{{ 3_what_intro | markdownify }}
					<div class="accordion accordion-flush" id="accordionFlushWhat">
						<div class="accordion-item">
							<h2 class="accordion-header">
								<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
									data-bs-target="#flush-collapseOne" aria-expanded="false"
									aria-controls="flush-collapseOne">
									Main focus
								</button>
							</h2>
							<div id="flush-collapseOne" class="accordion-collapse collapse"
								data-bs-parent="#accordionFlushWhat">
								<div class="accordion-body">
									{% capture 3_what_main_focus %}{% include_relative
									index_sections/3_what_main_focus.md %}{% endcapture %}
									{{ 3_what_main_focus | markdownify }}
								</div>
							</div>
						</div>
						<div class="accordion-item">
							<h2 class="accordion-header">
								<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
									data-bs-target="#flush-collapseTwo" aria-expanded="false"
									aria-controls="flush-collapseTwo">
									Left or Right?
								</button>
							</h2>
							<div id="flush-collapseTwo" class="accordion-collapse collapse"
								data-bs-parent="#accordionFlushWhat">
								<div class="accordion-body">
									{% capture 3_what_left_or_right %}{% include_relative
									index_sections/3_what_left_or_right.md %}{% endcapture %}
									{{ 3_what_left_or_right | markdownify }}</div>
							</div>
						</div>
						<div class="accordion-item">
							<h2 class="accordion-header">
								<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
									data-bs-target="#flush-collapseThree" aria-expanded="false"
									aria-controls="flush-collapseThree">
									General Elections
								</button>
							</h2>
							<div id="flush-collapseThree" class="accordion-collapse collapse"
								data-bs-parent="#accordionFlushWhat">
								<div class="accordion-body">
									{% capture 3_what_elections %}{% include_relative index_sections/3_what_elections.md
									%}{% endcapture %}
									{{ 3_what_elections | markdownify }}</div>
							</div>
						</div>
						<div class="accordion-item">
							<h2 class="accordion-header">
								<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
									data-bs-target="#flush-collapseFour" aria-expanded="false"
									aria-controls="flush-collapseFour" style="text-transform: none;" >
									MPs
								</button>
							</h2>
							<div id="flush-collapseFour" class="accordion-collapse collapse"
								data-bs-parent="#accordionFlushWhat">
								<div class="accordion-body">
									{% capture 3_what_mps %}{% include_relative index_sections/3_what_mps.md
									%}{% endcapture %}
									{{ 3_what_mps | markdownify }}</div>
							</div>
						</div>
						<div class="accordion-item">
							<h2 class="accordion-header">
								<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
									data-bs-target="#flush-collapseFive" aria-expanded="false"
									aria-controls="flush-collapseFive"  >
									Funding
								</button>
							</h2>
							<div id="flush-collapseFive" class="accordion-collapse collapse"
								data-bs-parent="#accordionFlushWhat">
								<div class="accordion-body">
									{% capture 3_what_funding %}{% include_relative index_sections/3_what_funding.md
									%}{% endcapture %}
									{{ 3_what_funding | markdownify }}</div>
							</div>
						</div>
						<div class="accordion-item">
							<h2 class="accordion-header">
								<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
									data-bs-target="#flush-collapse7" aria-expanded="false"
									aria-controls="flush-collapse7"  >
									Policy Development
								</button>
							</h2>
							<div id="flush-collapse7" class="accordion-collapse collapse"
								data-bs-parent="#accordionFlushWhat">
								<div class="accordion-body">
									{% capture 3_what_policy_development %}{% include_relative index_sections/3_what_policy_development.md
									%}{% endcapture %}
									{{ 3_what_policy_development | markdownify }}

									<a href="{% link assets/images/political.nz_policy_flow.png %}" class="image">
										<img src="{% link assets/images/political.nz_policy_flow.png %}" alt="" data-position="top center" />
									</a>
								</div>
							</div>
						</div>							
					</div>
					<div>
						<p>&nbsp;</p> 
					</div>
				</div>
			</div>
		</section>
		
		<section>
			<span href="generic.html" class="image">
				<img src="{% link assets/images/how.png %}" alt="" data-position="center center" />
			</span>
			<div class="content">
				<div class="inner">
					<header class="major">
						<h3>How?</h3>
					</header>
					{% capture 4_how_intro %}{% include_relative index_sections/4_how_intro.md %}{% endcapture %}
					{{ 4_how_intro | markdownify }}

					<div class="accordion accordion-flush" id="accordionFlushHow">
						<div class="accordion-item">
							<h2 class="accordion-header">
								<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
									data-bs-target="#flush-collapse10" aria-expanded="false"
									aria-controls="flush-collapse10">
									1 Vision
								</button>
							</h2>
							<div id="flush-collapse10" class="accordion-collapse collapse"
								data-bs-parent="#accordionFlushHow">
								<div class="accordion-body">
									{% capture 4_how_vision %}{% include_relative
									index_sections/4_how_vision.md %}{% endcapture %}
									{{ 4_how_vision | markdownify }}
								</div>
							</div>
						</div>
						<div class="accordion-item">
							<h2 class="accordion-header">
								<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
									data-bs-target="#flush-collapse20" aria-expanded="false"
									aria-controls="flush-collapse20">
									2 Start-up
								</button>
							</h2>
							<div id="flush-collapse20" class="accordion-collapse collapse"
								data-bs-parent="#accordionFlushHow">
								<div class="accordion-body">
									{% capture 4_how_startup %}{% include_relative
										index_sections/4_how_startup.md %}{% endcapture %}
										{{ 4_how_startup | markdownify }}
								</div>
							</div>
						</div>
						<div class="accordion-item">
							<h2 class="accordion-header">
								<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
									data-bs-target="#flush-collapse30" aria-expanded="false"
									aria-controls="flush-collapse30">
									3 Build
								</button>
							</h2>
							<div id="flush-collapse30" class="accordion-collapse collapse"
								data-bs-parent="#accordionFlushHow">
								<div class="accordion-body">
									{% capture 4_how_build %}{% include_relative index_sections/4_how_build.md %}{% endcapture %}
										{{ 4_how_build | markdownify }}
								</div>
							</div>
						</div>
						<div class="accordion-item">
							<h2 class="accordion-header">
								<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
									data-bs-target="#flush-collapse40" aria-expanded="false"
									aria-controls="flush-collapse40" style="text-transform: none;" >
									4 Quorum
								</button>
							</h2>
							<div id="flush-collapse40" class="accordion-collapse collapse"
								data-bs-parent="#accordionFlushHow">
								<div class="accordion-body">
									{% capture 4_how_quorum %} {% include_relative index_sections/4_how_quorum.md %}{% endcapture %}
									{{ 4_how_quorum | markdownify }}</div>
							</div>
						</div>
						<div class="accordion-item">
							<h2 class="accordion-header">
								<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
									data-bs-target="#flush-collapse50" aria-expanded="false"
									aria-controls="flush-collapse50"  >
									5 Launch
								</button>
							</h2>
							<div id="flush-collapse50" class="accordion-collapse collapse"
								data-bs-parent="#accordionFlushHow">
								<div class="accordion-body">
									{% capture 4_how_launch %}{% include_relative index_sections/4_how_launch.md
									%}{% endcapture %}
									{{ 4_how_launch | markdownify }}</div>
							</div>
						</div>
					</div>
					<div>
						<p>&nbsp;</p> 
					</div>

				</div>
			</div>
		</section>


	</section>



</div>
