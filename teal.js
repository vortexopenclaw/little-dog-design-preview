// Concept 01 only. Public listing snapshot, not a synchronized dog database.
function applyPracticalConcept(pages) {
  const snapshot = 'Listing snapshot: September 7, 2026. Confirm current fee and availability with the rescue.';
  const facts = `<dl class="facts">
    <div><dt>Adoption fee</dt><dd>$1,275</dd></div><div><dt>Age at snapshot</dt><dd>2 years, 7 months, 1 week</dd></div>
    <div><dt>Listed breed</dt><dd>Coton de Tuléar</dd></div><div><dt>Sex</dt><dd>Female</dd></div>
    <div><dt>Weight</dt><dd>13.9 lb</dd></div><div><dt>Location</dt><dd>Foster home</dd></div>
    <div><dt>Animal ID</dt><dd>LDR-A-1365</dd></div>
  </dl>`;
  const gallery = `<div class="dog-gallery"><img id="profile-photo" src="assets/valance-0.webp" width="1028" height="1028" alt="Valance in her foster home">
    <div class="thumbs" aria-label="All eight Valance photos">${Array.from({length:8}, (_,i)=>`<button data-photo="${i}" aria-label="View Valance photo ${i+1}" aria-pressed="${i===0}"><img src="assets/valance-${i}.webp" width="70" height="70" alt=""></button>`).join('')}</div>
    <p class="quiet">8 photos · Select any thumbnail to view the full image.</p></div>`;
  const dog = `<div class="profile-grid">${gallery}<div class="dog-summary"><span class="eyebrow">FEATURED DOG · DESIGN SAMPLE</span><h2>Valance</h2>${facts}
    <p class="quiet">${snapshot}</p><div class="actions">${external(application,'Apply to adopt')}${external(profile,'View official profile','button secondary')}</div>
    <p class="quiet">Use Valance / LDR-A-1365 in the rescue’s application.</p>
    <h3>What to know</h3><ul><li>Shy in new situations; affectionate once she feels safe.</li><li>Needs a calm, patient, low-traffic home.</li><li>Expect an adjustment period and help with training.</li></ul>
    ${link('profile','Full dog details & all photos →')}
  </div></div>`;
  const support = `<div class="practical-links">${external(official+'about-us','About the rescue','')}${external(official+'volunteer','Volunteer','')}${external(official+'foster','Foster','')}${external(official+'support-us','Donate','')}${link('contact','Contact')}</div>`;
  pages.home = () => `<section class="practical-head"><h1>Find a dog to adopt.</h1><p>Photos, adoption fees, dog details, and how to apply.</p><div class="actions">${link('dogs','Browse all available dogs','button')}${link('process','Adoption process','button secondary')}</div></section>
    <section class="practical-content" aria-label="Featured dog">${dog}</section>
    <section class="practical-content"><h2>How to adopt</h2><p>Apply → application review and phone conversation → matching and meet-and-greet → agreement and adoption fee.</p>${link('process','Process, included care & FAQs →')}<h2>About & support</h2>${support}<p class="quiet">This featured layout is a design sample. The live directory remains in Shelterluv.</p></section>`;
  pages.profile = () => `<section class="practical-head">${link('dogs','← All available dogs')}<h1>Valance</h1></section><section class="practical-content">${dog}
    <h2>Personality & home needs</h2><p>Her foster describes a dog who is nervous around new places and loud noises. Once comfortable, she seeks affection, follows her person around the home, and enjoys sleeping in bed. The foster had not heard her bark or whine at the time of the listing; that is an observation, not a guarantee.</p>
    <h2>Training & care</h2><p>The rescue asks adopters not to expect dogs to arrive fully trained. Allow time for house training, leash skills, routines, and decompression. Its listing discourages crates except for vehicle transport. Breed, adult size, weight, and coat type are estimates, not guarantees.</p>
    <p>Compatibility with children, cats, and other dogs is not specified in this captured profile. Ask the rescue; do not assume suitability.</p>
    <div class="actions">${external(profile,'Read the complete official listing','button secondary')}${external(application,'Apply to adopt')}</div>${link('process','Adoption process & included care →')}<h2>About & support</h2>${support}
    <p class="quiet">Design sample using a dated public listing. This layout would need manual updates in Squarespace; it does not restyle Shelterluv’s embedded profiles.</p></section>`;
  const originalDogs = pages.dogs;
  pages.dogs = () => originalDogs().replace('MEET YOUR NEXT CHAPTER','AVAILABLE DOGS').replace('Little dogs. Real connections.','Browse dogs for adoption.').replace('Browse the rescue’s existing Shelterluv listings. Use its search and filters, then open a profile to learn about an individual dog.','Search available dogs. Open a profile for all photos, age, weight, adoption fee, and the application.');
  document.querySelector('nav .nav-cta').textContent = 'Donate';
  document.querySelector('nav .nav-cta').href = official+'support-us';
  document.querySelector('nav .nav-cta').setAttribute('data-official','');
  document.querySelector('.footer-top h2').textContent = 'Little Dog Rescue';
}
