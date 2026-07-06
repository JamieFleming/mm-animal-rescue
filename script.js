/* ============================================================
   MM Animal Rescue — vanilla JS
   3-page routing, liquid-glass nav, pet grid + filters,
   profile modal, application & contact forms.
   ============================================================ */
(function () {
	"use strict";

	/* ---------- DATA ---------- */
	var PETS = [
		{
			id: "daisy",
			name: "Daisy",
			species: "Dog",
			sex: "F",
			age: "4 years",
			size: "Medium",
			nature: "Playful",
			status: "Available",
			image: "assets/images/Daisy.png",
			neutered: true,
			vaccinated: true,
			goodWithCats: null,
			goodWithDogs: true,
			goodWithChildren: null,
			traits: ["Playful", "Mischievous", "Loves dogs", "Affectionate"],
			bio: "Daisy is a lively, mischievous little pup bursting with love and ready to find her people. She adores the company of other dogs and would thrive with a canine playmate, though a devoted family who can give her time and patience is all she truly needs. With the right home behind her, this sweet girl will fill every room with joy.",
			story:
				"Daisy is a lively, playful little pup full of mischief and love, ready to find her forever family. She enjoys playing with her sister Minnie and all her friends at the rescue, and she would thrive with another dog as a playmate—but it’s not essential as long as her new family can give her plenty of time, love, and patience. Daisy has had a tough start to life, surviving parvo alongside her sister Minnie, and now she’s fully recovered, vaccinated, and spayed. She has never been alone before, so she’ll need a gentle, understanding home to help her settle in. She’s best suited to families with children over 8 who can respect her space while she adjusts. With the right care and companionship, Daisy will blossom into a joyful, loving, and loyal friend who will fill her forever home with fun and affection.",
		},
		{
			id: "lolita",
			name: "Lolita",
			species: "Cat",
			sex: "F",
			age: "3 years",
			size: "Small",
			nature: "Curious",
			status: "Available",
			neutered: "on adoption",
			image: "assets/images/lolita.png",
			vaccinated: true,
			goodWithCats: true,
			goodWithDogs: null,
			goodWithChildren: true,
			traits: ["Curious", "Energetic", "Sociable"],
			bio: "Lolita is a curious, spirited cat who greets every day as an adventure. She is playful, bold and full of character — perfect for a family who will match her energy and give her plenty of toys to pounce on.",
			story:
				"Lolita came to us as part of a litter of four found abandoned in a cardboard box near a market in Cluj. All her siblings have since found homes — Lolita is the last of her litter still waiting. She has been beautifully socialised with other animals and people and is more than ready for her forever family.",
		},
		{
			id: "luca",
			name: "Luca",
			species: "Dog",
			sex: "M",
			age: "4 years",
			size: "Large",
			nature: "Energetic",
			status: "Available",
			neutered: true,
			image: "assets/images/luca.png",
			vaccinated: true,
			goodWithCats: false,
			goodWithDogs: true,
			goodWithChildren: null,
			traits: ["Mischievous", "Energetic", "Loves dogs", "Playful"],
			bio: "Luca is a cheeky, mischievous bundle of energy with bags of personality and an enormous heart. A large GSD x Husky mix, he thrives on activity, training and play — and needs an experienced family who understands working breeds and can match his enthusiasm. He shares a close bond with his brother Stave and would ideally be rehomed alongside him.",
			story:
				"Luca has been tested for all diseases, is fully vaccinated and neutered, and is now ready to find his forever home. He gets along wonderfully with the other dogs in our rescue, especially his brother Stave — his sister Tamina has already been adopted, and the boys are now waiting together. Ideally Luca would be adopted alongside Stave to help him settle and keep him happily occupied. As a large working breed, he needs plenty of structure, exercise and mental stimulation. He can live with children over 10 with careful introductions and supervision, but due to his prey drive is not suitable for homes with cats or small furries. With the right environment, Luca will grow into a loyal, fun-loving companion full of cheek, charm and endless affection.",
		},
		{
			id: "toots",
			name: "Toots",
			species: "Cat",
			sex: "M",
			age: "1 Year",
			size: "Small",
			nature: "Playful/Loving",
			status: "Available",
			neutered: "on adoption",
			image: "assets/images/toots.png",
			vaccinated: true,
			goodWithCats: true,
			goodWithDogs: true,
			goodWithChildren: null,
			traits: ["Independent", "Quiet", "Indoor cat"],
			bio: "",
			story: "",
		},
	];

	var STORIES = [
		{
			id: "hope",
			name: "Hope",
			image: "assets/images/HEA_hope.avif",
			adoptedBy: "Dawn Nevitt",
			year: "2021",
			summary:
				"Rescued from a lake in Romania, Hope went on to become a certified therapy dog \u2014 making weekly visits to an elderly home and bringing warmth to everyone she meets.",
			story:
				"Hope was saved from a lake in Romania near one of the spots where Mihaela feeds the strays. She had jumped in not realising how deep it was. She was brought into foster in the UK and adopted by Dawn Nevitt in 2021.\n\nShe has since become a therapy dog, supporting the elderly and hoping to expand into helping children with special needs. She makes weekly visits to the local elderly home and gives each resident some love in return for a little fuss. She is also wonderful with Dawn's elderly father at home, who is hard of hearing \u2014 she barks and gives him a nudge on the leg to let him know there's a knock at the door.\n\nWhen Dawn picked Hope up from her foster family, her partner called while she was walking her to the car \u2014 and Hope ran and jumped straight into the backseat. When she got home it was as if she had always been there, settling right in and beginning to show her amazing, loving personality. At that moment, Dawn knew this dog had something special that had to be shared.\n\nHope has always had a love for water \u2014 the very thing that got her into her initial predicament \u2014 but she now spends her days splashing safely in the pool or in the sea. She is gentle with both the little ones and the elderly alike. Although she started life as a stray on the streets of Romania, she now leads an incredible life, absolutely adored and undoubtedly spoiled by her forever family.",
		},
		{
			id: "teddyandtibbs",
			name: "Teddy & Tibbs",
			image: "assets/images/HEA_teddy_and_tibbs.png",
			adoptedBy: "Koz Leanne",
			year: "2023",
			summary:
				"Abandoned together at a veterinary clinic in Romania, Teddy and Tibbs found a second chance when they were adopted by Koz Leanne in 2023. Today, the inseparable brothers enjoy a life filled with comfort, affection, and well-earned happiness.",
			story:
				"Teddy and Tibbs were both abandoned at a local veterinary clinic in Romania after facing very different challenges. Teddy had been attacked by other dogs and, while recovering, was diagnosed with FIV (Feline Immunodeficiency Virus). Tibbs, who is blind and can only see shadows, had also been left behind. Despite everything they had endured, the two boys remained together and, in 2023, made the journey to the UK after being adopted by Koz Leanne.\n\nWhen Teddy first arrived, he needed a little extra care while settling into his new home. His FIV diagnosis meant additional vet visits, and he was a little under the weather at first, but it wasn't long before he was happy, healthy, and enjoying life. Now, he loves nothing more than stretching out for a nap on the bed or curling up beside anyone relaxing on the sofa. Calm, affectionate, and always ready for a cuddle, he has truly embraced the comforts of home.\n\nAlthough Tibbs is blind, he has never let his disability define him. Back in Romania, he was constantly seeking affection and attention, but now that he feels safe and secure, he is content to spend his days relaxing in the catio, listening to the birds and enjoying the world around him in his own way.\n\nAfter welcoming Teddy and Tibbs into the family, Koz adopted another rescue cat, and the trio quickly became the best of friends. Every evening, without fail, they all make their way to the kitchen at exactly 5pm for dinner. Teddy, in particular, is known for his enthusiastic love of food and never misses a meal — though after everything he has been through, everyone agrees he has earned the occasional extra treat.\n\nDespite the difficult start both boys had in life, Teddy and Tibbs have found exactly what every rescue animal deserves: a safe home, endless love, and a family who cherishes them. Their past no longer defines them, and today they live the happy, peaceful life they were always meant to have.",
		},
		{
			id: "honey",
			name: "Honey",
			image: "assets/images/HEA_honey.png",
			adoptedBy: "Janet Collins",
			year: "2020",
			summary:
				"Found abandoned on the streets of Romania, Honey was adopted by Janet Collins in 2020. Since arriving in the UK, she has become a much-loved local celebrity, raising money for charity and bringing comfort, love, and laughter to everyone she meets.",
			story:
				"Honey was found abandoned on the streets of Romania before being rescued and making the journey to the UK after being adopted by Janet Collins in 2020. From the moment she arrived, she settled into family life with ease, quickly showing just how affectionate and people-focused she was.\n\nHoney has a special love for children, especially Janet's grandchildren. Whenever they visit, she eagerly runs out to greet them at the car, proudly escorting the youngest safely along the path before keeping a watchful eye while they play in the garden. Once everyone is back inside, she happily soaks up all the fuss, kisses, and cuddles she can get.\n\nIn 2021, Janet was diagnosed with cancer, and Honey instinctively took on the role of loyal companion and protector, rarely leaving her side. Wanting to give something back, Honey even took part in a sponsored 'Pawathon', aiming to walk 50 kilometres over the course of a month to raise money for cancer support. Although Janet's hospital admission meant they couldn't complete the full distance, Honey still helped raise £150 for the charity and became something of a local celebrity around the village, known for being a gentle yet wonderfully sassy little princess.\n\nVery little is known about Honey's life before her rescue, but her family noticed behaviours suggesting she may have had puppies and may have experienced neglect or abuse. When she first arrived, she had a few accidents during the night and was frightened of getting into the car, but with patience, reassurance, and plenty of love, she gradually overcame her fears. Today, she jumps happily in and out of the car, walks beautifully both on and off the lead, and enjoys every adventure with her family.\n\nBelieved to be around nine years old and thought to be a Golden Retriever and Corgi cross, Honey has left her difficult past behind. She now spends her days surrounded by love, bringing comfort, joy, and a little bit of sass to everyone she meets. Her story is a wonderful reminder of just how much a rescue dog can flourish when given a second chance.",
		},
	];

	var TEAM = [
		{
			name: "Mihaela Maria",
			role: "Founder & Rescuer",
			image: "assets/images/mihaela_profile.png",
		},
		{
			name: "Nicola Bouzid",
			role: "Adoption Manager",
			image: "assets/images/nicola_profile.png",
		},
		{
			name: "Francesca Wallace",
			role: "Admin/Support",
			image: "assets/images/frankie_profile.png",
		},
		{
			name: "Jacqueline Wallace",
			role: "Fundraising Manager",
			image: "assets/images/jakki_profile.png",
		},
		{ name: "Monique Rainey", role: "Adoption & Fundraising" },
		{ name: "Pam Robinson", role: "Fundraising North" },
		{ name: "Lizzie Manners", role: "Fundraising North" },
	];

	/* ---------- HELPERS ---------- */
	function el(id) {
		return document.getElementById(id);
	}
	function sexIcon(s) {
		return s === "F" ? "\u2640" : "\u2642";
	}
	function badgeClass(sp) {
		return sp === "Dog" ? "badge dog" : "badge";
	}
	function statusClass(st) {
		return st === "Available" ? "status" : "status reserved";
	}

	/* ---------- RENDER PET CARDS ---------- */
	function petCard(p) {
		var card = document.createElement("div");
		card.className = "pet-card";
		card.innerHTML =
			'<div class="pet-card-media">' +
			'<div class="photo pet-photo" data-label="' +
			p.name +
			'"' +
			(p.image ? ' style="background-image:url(' + p.image + ')"' : "") +
			"></div>" +
			'<div class="grad"></div>' +
			'<span class="' +
			badgeClass(p.species) +
			'">' +
			p.species +
			"</span>" +
			(p.status === "Reserved"
				? '<span class="' + statusClass(p.status) + '">' + p.status + "</span>"
				: "") +
			'<div class="pet-card-name"><h3>' +
			p.name +
			'</h3><span class="sex">' +
			sexIcon(p.sex) +
			"</span></div>" +
			"</div>" +
			'<div class="pet-card-body">' +
			'<div class="pet-meta">' +
			p.age +
			" \u00b7 " +
			p.size +
			" \u00b7 " +
			p.nature +
			"</div>" +
			'<div class="chip-row">' +
			p.traits
				.slice(0, 3)
				.map(function (t) {
					return '<span class="chip">' + t + "</span>";
				})
				.join("") +
			"</div>" +
			"</div>";
		card.addEventListener("click", function () {
			openModal(p);
		});
		return card;
	}

	function renderPets() {
		var featured = el("featured-grid");
		if (featured) {
			featured.innerHTML = "";
			PETS.slice(0, 4).forEach(function (p) {
				featured.appendChild(petCard(p));
			});
		}
		renderAdoptGrid("all");
	}

	function renderAdoptGrid(filter) {
		var grid = el("adopt-grid");
		if (!grid) return;
		grid.innerHTML = "";
		PETS.filter(function (p) {
			return filter === "all" ? true : p.species === filter;
		}).forEach(function (p) {
			grid.appendChild(petCard(p));
		});
	}

	/* ---------- HAPPY EVER AFTERS ---------- */
	function storyCard(s) {
		var card = document.createElement("div");
		card.className = "hea-card";
		var imgStyle = s.image
			? ' style="background-image:url(' + s.image + ')"'
			: "";
		card.innerHTML =
			'<div class="hea-photo"' +
			imgStyle +
			"></div>" +
			'<div class="hea-body">' +
			'<div class="hea-name">' +
			s.name +
			"</div>" +
			'<p class="hea-summary">' +
			s.summary +
			"</p>" +
			'<span class="hea-read">Read their story \u2192</span>' +
			"</div>";
		card.addEventListener("click", function () {
			openStoryModal(s);
		});
		return card;
	}

	function renderStories() {
		["testi-grid", "testi-grid-about"].forEach(function (id) {
			var grid = el(id);
			if (!grid) return;
			grid.innerHTML = "";
			STORIES.forEach(function (s) {
				grid.appendChild(storyCard(s));
			});
		});
	}

	function openStoryModal(s) {
		var sp = el("story-photo");
		if (s.image) {
			sp.style.backgroundImage = "url(" + s.image + ")";
			sp.style.display = "";
		} else {
			sp.style.display = "none";
		}
		el("story-name").textContent = s.name;
		var meta = s.adoptedBy;
		if (s.year) meta += " \u00B7 " + s.year;
		if (s.detail) meta += " \u00B7 " + s.detail;
		el("story-meta").textContent = meta;
		el("story-text").textContent = s.story;
		el("story-modal").hidden = false;
		document.body.style.overflow = "hidden";
	}

	function closeStoryModal() {
		el("story-modal").hidden = true;
		document.body.style.overflow = "";
	}

	function renderTeam() {
		var grid = el("team-grid");
		if (!grid) return;

		var withPhoto = TEAM.filter(function (m) {
			return m.image;
		});
		var withoutPhoto = TEAM.filter(function (m) {
			return !m.image;
		});

		var html = '<div class="team-photo-grid">';
		html += withPhoto
			.map(function (m) {
				return (
					'<div class="member">' +
					'<img class="member-photo" src="' +
					m.image +
					'" alt="' +
					m.name +
					'">' +
					'<div class="member-name">' +
					m.name +
					"</div>" +
					'<div class="member-role">' +
					m.role +
					"</div>" +
					"</div>"
				);
			})
			.join("");
		html += "</div>";

		if (withoutPhoto.length) {
			html += '<div class="team-list">';
			html += withoutPhoto
				.map(function (m) {
					return (
						'<div class="team-list-item">' +
						'<span class="tl-name">' +
						m.name +
						"</span>" +
						'<span class="tl-role">' +
						m.role +
						"</span>" +
						"</div>"
					);
				})
				.join("");
			html += "</div>";
		}

		grid.innerHTML = html;
	}

	/* ---------- PET SELECT (apply form) ---------- */
	function fillPetSelect() {
		var sel = el("apply-pet");
		if (!sel) return;
		var opts = ["Not sure yet"].concat(
			PETS.map(function (p) {
				return p.name + " (" + p.species + ")";
			}),
		);
		sel.innerHTML = opts
			.map(function (o) {
				return "<option>" + o + "</option>";
			})
			.join("");
	}

	/* ---------- MODAL HELPERS ---------- */
	function detailPill(label, value) {
		var isYes = value === true;
		var isNo = value === false;
		var isOnAdoption = value === "on adoption";
		var display = isYes
			? "Yes"
			: isNo
				? "No"
				: isOnAdoption
					? "On adoption"
					: value;
		var cls =
			"dp" +
			(isYes
				? " dp-yes"
				: isNo
					? " dp-no"
					: isOnAdoption
						? " dp-adoption"
						: "");
		return (
			'<div class="' +
			cls +
			'">' +
			'<div class="dp-k">' +
			label +
			"</div>" +
			'<div class="dp-v">' +
			display +
			"</div></div>"
		);
	}

	function compatChip(label, value) {
		var cls =
			value === true
				? "cc cc-yes"
				: value === false
					? "cc cc-no"
					: "cc cc-unknown";
		var val = value === true ? "Yes" : value === false ? "No" : "Unknown";
		return (
			'<span class="' +
			cls +
			'">' +
			label +
			": <strong>" +
			val +
			"</strong></span>"
		);
	}

	/* ---------- MODAL ---------- */
	function openModal(p) {
		var mp = el("modal-photo");
		mp.setAttribute("data-label", p.name);
		mp.style.backgroundImage = p.image ? "url(" + p.image + ")" : "";
		el("modal-species").textContent = p.species;
		el("modal-species").className = badgeClass(p.species);
		el("modal-status").textContent = p.status;
		el("modal-status").className = statusClass(p.status);
		el("modal-name").innerHTML =
			p.name + ' <span class="sex">' + sexIcon(p.sex) + "</span>";
		el("modal-meta").textContent =
			p.age + " \u00b7 " + p.size + " \u00b7 " + p.nature;

		var fixedLabel = p.sex === "F" ? "Spayed" : "Neutered";
		el("modal-details").innerHTML =
			'<div class="detail-pills">' +
			detailPill(fixedLabel, p.neutered) +
			detailPill("Vaccinated", p.vaccinated) +
			"</div>";

		el("modal-compat").innerHTML =
			'<div class="compat-head">Compatibility</div>' +
			'<div class="compat-chips">' +
			compatChip("Cats", p.goodWithCats) +
			compatChip("Dogs", p.goodWithDogs) +
			compatChip("Children", p.goodWithChildren) +
			"</div>";

		el("modal-bio").textContent = p.bio;
		el("modal-story").textContent = p.story;
		el("modal-traits").innerHTML = p.traits
			.map(function (t) {
				return '<span class="chip">' + t + "</span>";
			})
			.join("");
		var applyBtn = el("modal-apply");
		applyBtn.innerHTML = "Apply to adopt " + p.name + " \u2192";
		applyBtn.onclick = function () {
			closeModal();
			navigate("adopt");
			var sel = el("apply-pet");
			if (sel) sel.value = p.name + " (" + p.species + ")";
			setTimeout(function () {
				var a = el("apply");
				if (a)
					window.scrollTo({
						top: a.getBoundingClientRect().top + window.scrollY - 90,
						behavior: "smooth",
					});
			}, 80);
		};
		el("modal").hidden = false;
		document.body.style.overflow = "hidden";
	}
	function closeModal() {
		el("modal").hidden = true;
		document.body.style.overflow = "";
	}

	/* ---------- ROUTING ---------- */
	function navigate(page) {
		document.querySelectorAll(".page").forEach(function (m) {
			m.classList.toggle("is-active", m.id === "page-" + page);
		});
		document.querySelectorAll(".nav-link").forEach(function (a) {
			a.classList.toggle("is-active", a.getAttribute("data-page") === page);
		});
		window.scrollTo({ top: 0, behavior: "smooth" });
	}

	/* ---------- FORMS ---------- */
	function wireForm(formId, successId, onDone) {
		var form = el(formId);
		if (!form) return;
		form.addEventListener("submit", function (e) {
			e.preventDefault();
			form.hidden = true;
			var s = el(successId);
			if (s) s.hidden = false;
			if (onDone) onDone(form, s);
		});
	}

	/* ---------- INIT ---------- */
	function init() {
		renderPets();
		renderStories();
		renderTeam();
		fillPetSelect();

		// page navigation (any element with data-page)
		document.addEventListener("click", function (e) {
			var t = e.target.closest("[data-page]");
			if (t) {
				e.preventDefault();
				navigate(t.getAttribute("data-page"));
			}
		});

		// filters
		var filters = el("filters");
		if (filters) {
			filters.addEventListener("click", function (e) {
				var b = e.target.closest(".filter");
				if (!b) return;
				filters.querySelectorAll(".filter").forEach(function (f) {
					f.classList.remove("is-active");
				});
				b.classList.add("is-active");
				renderAdoptGrid(b.getAttribute("data-filter"));
			});
		}

		// pet modal close
		el("modal-close").addEventListener("click", closeModal);
		el("modal").addEventListener("click", function (e) {
			if (e.target === el("modal")) closeModal();
		});

		// story modal close
		el("story-close").addEventListener("click", closeStoryModal);
		el("story-modal").addEventListener("click", function (e) {
			if (e.target === el("story-modal")) closeStoryModal();
		});

		document.addEventListener("keydown", function (e) {
			if (e.key === "Escape") {
				closeModal();
				closeStoryModal();
			}
		});

		// forms
		wireForm("apply-form", "apply-success", function (form) {
			var name = form.querySelector('[name="name"]').value || "friend";
			var pet = form.querySelector('[name="pet"]').value;
			var label = pet && pet !== "Not sure yet" ? pet : "your application";
			el("apply-success-text").innerHTML =
				"Thank you, " +
				name +
				"! Your application is in. We\u2019ll be in touch within 48 hours about " +
				label +
				".";
		});
		el("apply-reset").addEventListener("click", function () {
			el("apply-form").reset();
			el("apply-form").hidden = false;
			el("apply-success").hidden = true;
		});
		wireForm("contact-form", "contact-success");

		// liquid-glass nav scroll state
		var nav = el("nav");
		function onScroll() {
			nav.classList.toggle("scrolled", window.scrollY > 24);
		}
		window.addEventListener("scroll", onScroll, { passive: true });
		onScroll();
	}

	if (document.readyState === "loading")
		document.addEventListener("DOMContentLoaded", init);
	else init();
})();
