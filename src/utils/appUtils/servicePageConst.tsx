// src/utils/appUtils/servicesConstants.js

import React from "react";

export const servicesDetails = [
  {
    id: "cataract",
    title: "Cataract",
    image: "/cataract.png",
    description:
      "Cataracts are a leading cause of vision loss, especially among older adults. Characterized by clouding of the eye’s natural lens, cataracts can cause blurry vision, light sensitivity, and difficulty seeing at night. Early diagnosis is essential for effective management and improved quality of life. Treatment options include prescription lenses for mild cases and advanced cataract surgery for more severe vision impairment. At our clinic, we offer comprehensive cataract evaluation and state-of-the-art treatment. Schedule a consultation with our experienced eye specialists to restore your vision and maintain long-term eye health.",
    link: "/services/cataract",
    content: (
      <>
        {/* Main Heading */}
        <h2 className="text-4xl font-extrabold text-cyan-900 mt-8 mb-4 text-center tracking-tight">
          Comprehensive Cataract Care at Dr. Preeti’s Bright Eye Care Hospital
        </h2>
        <p className="text-center font-normal text-lg text-gray-700 max-w-3xl mx-auto mb-12">
          Reclaim clear, confident vision—don’t let cataracts dim your life. At
          Dr. Preeti’s Bright Eye Care Hospital, we combine compassion,
          technology, and expertise to guide you from your first consultation to
          best-in-class cataract treatment and care.
        </p>

        {/* Patient Care Philosophy Section */}
        <div className="bg-gray-50 rounded-xl p-8 shadow-sm flex flex-col md:flex-row items-center gap-10 my-10">

          <div className="flex-1">
            <h2 className="text-3xl font-semibold text-cyan-700 mb-6">
              Our Patient Care Philosophy
            </h2>
            <ul className="list-none space-y-4 text-lg text-gray-800">
              <li className="flex items-start gap-3">
                <span className="text-cyan-600">✅</span>
                <p>
                  Personalized consultations with clear explanations of every
                  option
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-600">✅</span>
                <p>Transparent communication at every stage of your journey</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-600">✅</span>
                <p>
                  A caring, supportive environment focused on comfort and
                  clarity
                </p>
              </li>
            </ul>
            <p className="font-bold text-lg text-gray-900 mt-6">
              From the moment you arrive, your vision and well-being come first.
            </p>
          </div>
        </div>

        {/* Lens Options Section */}
        <hr className="my-10 border-gray-200" />
        <h2 className="text-3xl font-semibold text-cyan-700 text-center mb-8">
          Cataract Surgery Lens Options
        </h2>
        <div className="space-y-8">
          <div className="bg-white border border-gray-200 rounded-3xl p-6 flex flex-col md:flex-row items-center gap-6 shadow-sm">

            <div className="flex-1">
              <h3 className="text-xl font-bold text-cyan-700 mb-2">
                Monofocal Lens
              </h3>
              <p className="text-gray-600 text-base">
                Monofocal lenses are intraocular lenses typically used in
                cataract surgery that have a fixed focus at a single distance,
                usually optimized for clear distance vision. This means that
                after surgery with monofocal lenses, patients generally see well
                at one distance (most commonly far) but will require glasses for
                near or intermediate tasks like reading or computer use.
              </p>
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded-3xl p-6 flex flex-col md:flex-row items-center gap-6 shadow-sm">

            <div className="flex-1">
              <h3 className="text-xl font-bold text-cyan-700 mb-2">
                Astigmatism-Correcting (Toric) Lens
              </h3>
              <p className="text-gray-600 text-base">
                An astigmatism-correcting lens—most commonly referred to as a
                toric intraocular lens (IOL)—is a specialized artificial lens
                designed to correct both cataracts and astigmatism during
                cataract surgery.
              </p>
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded-3xl p-6 flex flex-col md:flex-row items-center gap-6 shadow-sm">

            <div className="flex-1">
              <h3 className="text-xl font-bold text-cyan-700 mb-2">
                Multifocal & Accommodative Lenses
              </h3>
              <p className="text-gray-600 text-base">
                Multifocal intraocular lenses are advanced artificial lenses
                implanted during cataract surgery (or refractive lens exchange)
                to provide clear vision at multiple distances—typically near,
                intermediate, and far. Unlike monofocal IOLs, which correct
                vision at only one distance, multifocal IOLs are designed to
                reduce dependence on glasses by splitting incoming light into
                two or more focal points on the retina.
              </p>
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded-3xl p-6 flex flex-col md:flex-row items-center gap-6 shadow-sm">

            <div className="flex-1">
              <h3 className="text-xl font-bold text-cyan-700 mb-2">
                Extended Depth of Focus (EDOF) IOLs
              </h3>
              <p className="text-gray-600 text-base">
                Extended Depth of Focus (EDOF) IOLs are a newer generation of
                intraocular lens technology designed for use in cataract surgery
                and refractive lens exchange. EDOF lenses aim to provide a
                continuous range of sharp vision, especially from distance to
                intermediate, by creating a single elongated focal point—unlike
                traditional monofocal lenses (which provide a single focus) or
                multifocal lenses (which split light into multiple discrete
                zones).
              </p>
            </div>
          </div>
        </div>

        {/* Cataract Surgery Procedure Section */}
        <hr className="my-10 border-gray-200" />
        <h2 className="text-3xl font-semibold text-cyan-700 text-center mb-8">
          Cataract Surgery Procedure
        </h2>
        <div className="flex flex-col-reverse md:flex-row items-center gap-10">
          <div className="flex-1">
            <ul className="list-none space-y-4 text-base text-gray-700">
              <li className="flex items-start">
                <span className="font-bold text-cyan-800 w-32 flex-shrink-0">
                  Preoperative Preparation:
                </span>
                <span className="flex-1">
                  Precise measurements of the eye are taken to determine the
                  correct power for the IOL implant.
                </span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-cyan-800 w-32 flex-shrink-0">
                  Anesthesia & Sterilization:
                </span>
                <span className="flex-1">
                  The eye is numbed with local anesthesia, and the surrounding
                  area is cleaned.
                </span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-cyan-800 w-32 flex-shrink-0">
                  Pupil Dilation:
                </span>
                <span className="flex-1">
                  Eye drops are used to dilate the pupil.
                </span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-cyan-800 w-32 flex-shrink-0">
                  Corneal Incision:
                </span>
                <span className="flex-1">
                  A small incision is made in the cornea to access the lens.
                </span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-cyan-800 w-32 flex-shrink-0">
                  Capsular Bag Opening:
                </span>
                <span className="flex-1">
                  A small opening is created in the capsule holding the lens.
                </span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-cyan-800 w-32 flex-shrink-0">
                  Phacoemulsification:
                </span>
                <span className="flex-1">
                  Ultrasound energy breaks up the cloudy lens, which is then
                  suctioned out.
                </span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-cyan-800 w-32 flex-shrink-0">
                  IOL Implantation:
                </span>
                <span className="flex-1">
                  A foldable artificial lens (IOL) is inserted into the empty
                  capsular bag.
                </span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-cyan-800 w-32 flex-shrink-0">
                  Incision Closure:
                </span>
                <span className="flex-1">
                  The incision typically seals on its own without stitches.
                </span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-cyan-800 w-32 flex-shrink-0">
                  Postoperative Protection:
                </span>
                <span className="flex-1">
                  The eye is covered, and patients receive aftercare
                  instructions.
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* MICS Section */}
        <hr className="my-10 border-gray-200" />
        <h2 className="text-3xl font-semibold text-cyan-700 text-center mb-8">
          MICS: Micro Incision Cataract Surgery
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-10 bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">

          <ul className="flex-1 list-disc ml-6 text-lg font-normal text-gray-700 space-y-3">
            <li>Local anesthesia to numb the eye.</li>
            <li>Tiny entry cuts at the corneal edge.</li>
            <li>
              Use of a phacoemulsification probe to break up the cataract with
              low-energy ultrasound vibrations.
            </li>
            <li>
              Irrigation and aspiration to remove lens fragments while
              maintaining eye pressure.
            </li>
            <li>
              Insertion of a foldable IOL through the same small incision.
            </li>
            <li>A self-sealing wound that requires no sutures.</li>
          </ul>
        </div>

        {/* FLACS Section */}
        <hr className="my-10 border-gray-200" />
        <h2 className="text-3xl font-semibold text-cyan-700 text-center mb-8">
          Femtosecond Laser-Assisted Cataract Surgery (FLACS)
        </h2>
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 bg-white border border-yellow-300 rounded-3xl p-8 shadow-md">
          <div className="flex-1">
            <p className="text-lg text-gray-700 mb-4">
              Femtosecond Laser-Assisted Cataract Surgery (FLACS) is a modern
              technique that uses a femtosecond laser to automate and enhance
              several key steps of the procedure. This results in more accurate
              and reproducible outcomes, improved safety, less ultrasound energy
              needed, and faster recovery.
            </p>
            <ul className="list-disc ml-6 text-base text-gray-700 space-y-3">
              <li>
                <span className="font-bold text-cyan-800">
                  Preoperative Preparation:
                </span>
                Topical anesthesia is applied, and imaging maps guide the laser
                treatment.
              </li>
              <li>
                <span className="font-bold text-cyan-800">Docking:</span> The
                eye is gently stabilized to position it correctly for the laser.
              </li>
              <li>
                <span className="font-bold text-cyan-800">
                  Corneal Incision:
                </span>
                The laser creates precise, bladeless incisions.
              </li>
              <li>
                <span className="font-bold text-cyan-800">
                  Anterior Capsulotomy:
                </span>
                The laser creates a highly accurate, perfectly circular opening
                in the lens capsule.
              </li>
              <li>
                <span className="font-bold text-cyan-800">
                  Lens Fragmentation:
                </span>
                The laser breaks the cloudy lens into smaller pieces, reducing
                the need for ultrasound.
              </li>
              <li>
                <span className="font-bold text-cyan-800">
                  Surgery Completion:
                </span>
                The surgeon removes the fragmented lens and implants the IOL.
              </li>
            </ul>
          </div>

        </div>

        {/* Symptom Checker Section */}
        <hr className="my-10 border-gray-200" />
        <h2 className="text-3xl font-semibold text-cyan-700 text-center mb-6">
          Cataract Symptom Checker
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xl font-medium text-gray-800 list-none max-w-4xl mx-auto">
          <li className="flex items-center gap-3 bg-gray-100 p-4 rounded-lg shadow-sm">
            <span className="text-2xl text-red-500">🔴</span> Blurry or cloudy
            vision
          </li>
          <li className="flex items-center gap-3 bg-gray-100 p-4 rounded-lg shadow-sm">
            <span className="text-2xl text-red-500">🔴</span> Glare or halos
            around lights
          </li>
          <li className="flex items-center gap-3 bg-gray-100 p-4 rounded-lg shadow-sm">
            <span className="text-2xl text-red-500">🔴</span> Faded or yellowing
            colors
          </li>
          <li className="flex items-center gap-3 bg-gray-100 p-4 rounded-lg shadow-sm">
            <span className="text-2xl text-red-500">🔴</span> Difficulty with
            night vision
          </li>
          <li className="flex items-center gap-3 bg-gray-100 p-4 rounded-lg shadow-sm">
            <span className="text-2xl text-red-500">🔴</span> Frequent changes
            in eyeglasses
          </li>
        </ul>

        {/* Patient Process Flow Section */}
        <hr className="my-10 border-gray-200" />
        <h2 className="text-3xl font-semibold text-cyan-700 text-center mb-6">
          Cataract Consultation: Patient Process Flow
        </h2>
        <ol className="list-decimal list-inside ml-4 text-lg text-gray-800 space-y-3">
          <li>Book an appointment (online/phone)</li>
          <li>Full eye examination with advanced diagnostics</li>
          <li>
            Personalized consultation with Dr. Preeti to discuss findings and
            options
          </li>
          <li>
            Guidance on lens choices, cost, insurance, and scheduling surgery
          </li>
          <li>Pre-operative instructions and preparation</li>
        </ol>

        {/* FAQ Section */}
        <hr className="my-10 border-gray-200" />
        <h2 className="text-3xl font-semibold text-cyan-700 text-center mb-6">
          Cataract Surgery FAQs
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-bold text-cyan-800 mb-2">
              Pre-Operative Instructions
            </h3>
            <p>
              <strong className="text-gray-900">
                Q: How do I prepare for cataract surgery?
              </strong>
              <br />
              <span className="text-gray-700">
                A: Follow your doctor's instructions about fasting, stopping
                specific medications, and arranging for a companion on surgery
                day.
              </span>
            </p>
            <p className="mt-4">
              <strong className="text-gray-900">
                Q: What tests are done pre-surgery?
              </strong>
              <br />
              <span className="text-gray-700">
                A: Comprehensive eye tests, measurements for lens implant
                selection, and other safety assessments.
              </span>
            </p>
            <p className="mt-4">
              <strong className="text-gray-900">
                Q: Should I change or stop any medications?
              </strong>
              <br />
              <span className="text-gray-700">
                A: Inform us about all your medicines. Certain drugs, like blood
                thinners, may need to be adjusted. We will guide you
                individually.
              </span>
            </p>
          </div>

          <div className="mt-8">
            <h3 className="text-2xl font-bold text-cyan-800 mb-2">
              Post-Operative Instructions
            </h3>
            <p>
              <strong className="text-gray-900">
                Q: What care is needed after surgery?
              </strong>
              <br />
              <span className="text-gray-700">
                A: Use prescribed eye drops, protect your eye, attend follow-up
                appointments, and avoid heavy lifting, dust, and swimming as
                instructed.
              </span>
            </p>
            <p className="mt-4">
              <strong className="text-gray-900">
                Q: When can I resume normal activities?
              </strong>
              <br />
              <span className="text-gray-700">
                A: Most patients return to regular routines in days, but full
                healing and precautions take 1–2 weeks.
              </span>
            </p>
            <p className="mt-4">
              <strong className="text-gray-900">
                Q: When will my vision improve?
              </strong>
              <br />
              <span className="text-gray-700">
                A: Usually within 24–48 hours, with best results in a few weeks.
              </span>
            </p>
          </div>

          <div className="mt-8">
            <h3 className="text-2xl font-bold text-cyan-800 mb-2">
              General Questions
            </h3>
            <p>
              <strong className="text-gray-900">
                Q: What are my lens options after cataract removal?
              </strong>
              <br />
              <span className="text-gray-700">
                A: Monofocal, multifocal, and toric lenses. We help you pick the
                best fit for your lifestyle.
              </span>
            </p>
            <p className="mt-4">
              <strong className="text-gray-900">
                Q: Is the surgery painful?
              </strong>
              <br />
              <span className="text-gray-700">
                A: No—your eye is numbed with anesthesia. The procedure is
                gentle and quick.
              </span>
            </p>
            <p className="mt-4">
              <strong className="text-gray-900">
                Q: What is the difference between MICS and FLACS?
              </strong>
              <br />
              <span className="text-gray-700">
                A: MICS uses super-small incisions for fast healing. FLACS adds
                laser accuracy to several key steps for even safer, more
                predictable results.
              </span>
            </p>
            <p className="mt-4">
              <strong className="text-gray-900">
                Q: Are cataracts only age-related?
              </strong>
              <br />
              <span className="text-gray-700">
                A: Mostly, but they can also result from health conditions,
                injury, or medications—even in younger people.
              </span>
            </p>
            <p className="mt-4">
              <strong className="text-gray-900">
                Q: Is cataract surgery permanent?
              </strong>
              <br />
              <span className="text-gray-700">
                A: Yes, the cloudy lens won’t return. Sometimes, a minor laser
                treatment is needed if cloudiness develops behind the new lens.
              </span>
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <hr className="my-10 border-gray-200" />
        <div className="bg-cyan-50 border border-cyan-200 rounded-3xl p-8 text-center my-10 shadow-md">
          <h3 className="text-3xl font-extrabold text-cyan-900 mb-4">
            Ready to See Life Clearly Again?
          </h3>
          <p className="text-lg text-gray-800 max-w-2xl mx-auto mb-6">
            At Dr. Preeti’s Bright Eye Care Hospital, we blend advanced
            technology with personalized, compassionate care—to help you regain
            bright, sharp vision and quality of life. Book your appointment
            today for an expert consultation!
          </p>
          <p className="font-bold text-cyan-700 text-lg">
            For questions or appointments, contact Dr. Preeti’s Bright Eye Care
            Hospital. Your eyesight deserves the best.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "cornea",
    title: "Cornea",
    image: "/Cornea.png",
    description:
      "The cornea is the transparent, dome-shaped outermost layer at the front of the eye. It covers the pupil, iris, and anterior chamber. Despite being as thin as a credit card, the cornea is crucial to both protecting the eye and providing most of its focusing power. It is avascular (contains no blood vessels), but highly innervated, and gets its nutrients from tears and the aqueous humor.",
    link: "/services/cornea",
    content: (
      <>
        <h2 className="text-3xl font-bold text-cyan-900 mb-4">
          Structure and Layers
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          The cornea is composed of five main layers (anterior to posterior):
        </p>
        <ul className="list-disc list-inside ml-4 text-base text-gray-700 space-y-2">
          <li>
            <strong>Epithelium:</strong> Outermost, protective barrier against
            dust, germs, and water; repairs quickly.
          </li>
          <li>
            <strong>Bowman’s Layer:</strong> Tough, collagen-rich, adds strength
            and structure, does not regenerate.
          </li>
          <li>
            <strong>Stroma:</strong> Thickest layer, made of regularly arranged
            collagen fibers for strength and transparency.
          </li>
          <li>
            <strong>Descemet’s Membrane:</strong> Thin but strong, protective
            basement membrane.
          </li>
          <li>
            <strong>Endothelium:</strong> Innermost, maintains corneal clarity
            by pumping out excess fluid.
          </li>
        </ul>

        <hr className="my-8 border-gray-300" />

        <h2 className="text-3xl font-bold text-cyan-900 mb-4">
          Corneal Function
        </h2>
        <ul className="list-disc list-inside ml-4 text-base text-gray-700 space-y-2">
          <li>
            <strong>Refraction of Light:</strong> The cornea provides most of
            the eye’s focusing power by bending (refracting) incoming light onto
            the lens and retina for clear vision.
          </li>
          <li>
            <strong>Protection:</strong> Serves as a barrier against dirt,
            germs, and potential injury.
          </li>
          <li>
            <strong>Sensation:</strong> Contains many nerve endings—making it
            highly sensitive to pain, touch, and temperature.
          </li>
        </ul>

        <hr className="my-8 border-gray-300" />

        <h2 className="text-3xl font-bold text-cyan-900 mb-4">
          Common Corneal Diseases
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          The cornea can be affected by various conditions, causing vision
          changes and discomfort:
        </p>
        <ul className="list-disc list-inside ml-4 text-base text-gray-700 space-y-2">
          <li>
            <strong>Keratitis:</strong> Inflammation, often due to infection.
          </li>
          <li>
            <strong>Keratoconus:</strong> Thinning and outward bulging of the
            cornea, causing distorted vision.
          </li>
          <li>
            <strong>Corneal Dystrophy:</strong> Genetic disorders causing
            gradual clouding.
          </li>
          <li>
            <strong>Corneal Ulcer:</strong> Open sore, frequently from
            infection, can lead to scarring and vision loss.
          </li>
          <li>
            <strong>Fuchs’ Endothelial Dystrophy:</strong> Degeneration of the
            inner layer, leading to swelling and cloudy vision.
          </li>
          <li>
            <strong>Trauma and Injury:</strong> Scratches or abrasions,
            sometimes requiring surgical intervention.
          </li>
        </ul>

        <hr className="my-8 border-gray-300" />

        <h2 className="text-3xl font-bold text-cyan-900 mb-4">
          Corneal Procedures & Surgeries
        </h2>
        <h3 className="text-2xl font-semibold text-cyan-800 mb-2">
          Corneal Transplantation (Keratoplasty)
        </h3>
        <p className="text-base text-gray-700 mb-4">
          Corneal transplants replace the diseased or damaged part of the cornea
          with healthy donor tissue and are categorized by the thickness and
          location of tissue replaced:
        </p>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Technique
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  What is Replaced
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Main Uses
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Penetrating Keratoplasty (PKP)
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  Full-thickness (all layers)
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  Severe scarring, widespread disease
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Deep Anterior Lamellar Keratoplasty (DALK)
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  Outer layers, keeps endothelium intact
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  Superficial scarring, keratoconus
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Endothelial Keratoplasty (DSAEK, DMEK)
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  Inner layer(s) (endothelium, Descemet’s)
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  Fuchs’, endothelial dysfunction
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Artificial Cornea (Keratoprosthesis)
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  Synthetic material replaces damaged cornea
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  Not eligible for standard transplant
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-base text-gray-700 mt-4">
          DSAEK/DMEK are less invasive, have faster recovery, and lower
          rejection risks compared to full-thickness transplants. DALK spares
          the endothelium for patients with healthy inner corneal layers,
          reducing risk even further.
        </p>

        <h3 className="text-2xl font-semibold text-cyan-800 mt-8 mb-2">
          Latest & Advanced Techniques
        </h3>
        <ul className="list-disc list-inside ml-4 text-base text-gray-700 space-y-2">
          <li>
            <strong>Femtosecond Laser-Assisted Surgery:</strong> Enhances
            precision in corneal cutting for grafts.
          </li>
          <li>
            <strong>Corneal Cross-linking:</strong> Uses riboflavin and UV light
            to strengthen corneal tissue and halt progression of keratoconus.
          </li>
          <li>
            <strong>3D-printed/Bioengineered Corneas:</strong> In development,
            aiming to supplement limited donor tissue.
          </li>
          <li>
            <strong>Imaging Advances:</strong> OCT & Scheimpflug imaging allow
            for mapping and planning of personalized corneal surgeries.
          </li>
        </ul>

        <hr className="my-8 border-gray-300" />

        <h2 className="text-3xl font-bold text-cyan-900 mb-4">
          Symptoms of Corneal Disease
        </h2>
        <ul className="list-disc list-inside ml-4 text-base text-gray-700 space-y-2">
          <li>Blurred or distorted vision</li>
          <li>Eye pain or discomfort</li>
          <li>Photophobia (light sensitivity)</li>
          <li>Redness and excessive tearing</li>
          <li>In advanced cases: scarring, cloudiness, or blindness</li>
        </ul>

        <div className="bg-cyan-50 border border-cyan-200 rounded-3xl p-8 text-center my-10 shadow-md">
          <h3 className="text-3xl font-extrabold text-cyan-900 mb-4">
            Ready to See Life Clearly Again?
          </h3>
          <p className="text-lg text-gray-800 max-w-2xl mx-auto mb-6">
            At Dr. Preeti’s Bright Eye Care Hospital, we blend advanced
            technology with personalized, compassionate care—to help you regain
            bright, sharp vision and quality of life. Book your appointment
            today for an expert consultation!
          </p>
          <p className="font-bold text-cyan-700 text-lg">
            For questions or appointments, contact Dr. Preeti’s Bright Eye Care
            Hospital. Your eyesight deserves the best.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "refractive",
    title: "Refractive Surgery",
    image: "/Refractive .png",
    description:
      "Refractive surgery refers to a group of surgical procedures aiming to correct vision problems—such as myopia, hyperopia, astigmatism, and presbyopia—by reshaping the cornea or replacing the eye’s natural lens. The goal is to reduce or eliminate the dependence on glasses or contact lenses for clearer vision. Recent innovations have made these procedures safer, more comfortable, and highly effective.",
    link: "/services/refractiveSurgery",
    content: (
      <>
        <h2 className="text-3xl font-bold text-cyan-900 mb-4">
          Types of Refractive Surgery and Their Technologies
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Refractive surgery corrects vision by reshaping the cornea or
          replacing the eye’s natural lens, offering life-changing freedom from
          dependency on glasses or contacts. Here are the main types of
          procedures:
        </p>
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Surgery Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  What It Does
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Typical Use
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  LASIK
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  Flap-and-laser reshaping of the cornea
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  Myopia, hyperopia, astigmatism
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  PRK (Photorefractive Keratectomy)
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  Surface laser reshaping after removing corneal epithelium
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  Thin/irregular corneas, dry eyes
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  SMILE (Small Incision Lenticule Extraction)
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  Flapless, keyhole removal of corneal tissue
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  Myopia, mild astigmatism
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Phakic IOL/ICL
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  Implantation of synthetic lens without removing natural lens
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  High prescription, unsuitable cornea
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Refractive Lens Exchange (RLE)
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  Replacement of natural lens with artificial intraocular lens
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  Severe presbyopia or cataract
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-2xl font-semibold text-cyan-800 mb-2">
          How Each Procedure Works
        </h3>
        <div className="space-y-6 text-gray-700 text-base">
          <div>
            <strong className="text-cyan-900">LASIK:</strong> A corneal flap is
            created, the underlying corneal tissue is reshaped with an excimer
            laser, and the flap is replaced. It offers a rapid recovery, with
            clear vision often achieved within hours.
          </div>
          <div>
            <strong className="text-cyan-900">PRK:</strong> The cornea’s surface
            layer (epithelium) is removed, then the underlying tissue is
            reshaped with an excimer laser. No flap is created, and a bandage
            contact lens is used to aid healing. Recovery is longer than with
            LASIK.
          </div>
          <div>
            <strong className="text-cyan-900">SMILE:</strong> A femtosecond
            laser creates a thin disc (lenticule) within the cornea. This
            lenticule is removed via a small incision, reshaping the cornea
            without a flap. It is minimally invasive with a quick recovery.
          </div>
        </div>

        <hr className="my-8 border-gray-300" />

        <h2 className="text-3xl font-bold text-cyan-900 mb-4">
          Advanced Technologies & Innovations
        </h2>
        <ul className="list-disc list-inside ml-4 text-base text-gray-700 space-y-2">
          <li>
            <strong>Femtosecond Laser:</strong> A "bladeless" laser that creates
            ultra-precise corneal flaps (LASIK, SMILE), increasing safety and
            accuracy.
          </li>
          <li>
            <strong>Excimer Laser:</strong> Used in LASIK and PRK, this laser
            ablates tissue with sub-micron precision to reshape the cornea.
          </li>
          <li>
            <strong>Wavefront-guided:</strong> A personalized treatment that
            corrects subtle imperfections unique to each eye, leading to sharper
            vision and reduced visual disturbances like glare and halos.
          </li>
          <li>
            <strong>Topography-guided:</strong> Maps the corneal surface to
            create custom ablation patterns, ideal for patients with irregular
            corneas.
          </li>
          <li>
            <strong>Eye-Tracking Systems:</strong> Real-time tracking ensures
            the laser stays perfectly aligned with the eye, even if it moves
            during the procedure.
          </li>
        </ul>

        <hr className="my-8 border-gray-300" />

        <h2 className="text-3xl font-bold text-cyan-900 mb-4">
          Advantages and Risks
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-green-700 mb-3">
              Advantages
            </h3>
            <ul className="list-none space-y-2 text-base text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-500">✔</span> High spectacle
                independence
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">✔</span> Quick recovery for
                LASIK and SMILE
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">✔</span> Long-lasting, often
                permanent correction
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">✔</span> Wide range of
                customizable techniques
              </li>
            </ul>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-red-700 mb-3">
              Risks & Limitations
            </h3>
            <ul className="list-none space-y-2 text-base text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-red-500">✖</span> Possible visual
                disturbances (glare, halos, dryness)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500">✖</span> Not all prescriptions or
                eye types are suitable
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500">✖</span> Rare but serious risks
                (infection, corneal ectasia)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500">✖</span> Irreversible in laser
                corneal procedures
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-8 border-gray-300" />

        <h2 className="text-3xl font-bold text-cyan-900 mb-4">
          Patient Experience & Precautions
        </h2>
        <ul className="list-disc list-inside ml-4 text-base text-gray-700 space-y-2">
          <li>
            <strong>Success Rate:</strong> Modern techniques often result in
            over 90% of patients achieving 20/20 vision or better.
          </li>
          <li>
            <strong>Screening:</strong> A comprehensive eye exam is crucial for
            determining eligibility, including corneal mapping and pupil size
            measurements.
          </li>
          <li>
            <strong>Recovery:</strong> Most discomfort subsides within a few
            days. Patients should avoid rubbing their eyes and strenuous
            activities post-surgery.
          </li>
          <li>
            <strong>Consultation:</strong> A personalized assessment with a
            qualified ophthalmologist is the best way to ensure safety and
            optimal results.
          </li>
        </ul>

        <div className="bg-cyan-50 border border-cyan-200 rounded-3xl p-8 text-center my-10 shadow-md">
          <h3 className="text-3xl font-extrabold text-cyan-900 mb-4">
            Ready for a Life Without Glasses?
          </h3>
          <p className="text-lg text-gray-800 max-w-2xl mx-auto mb-6">
            At Dr. Preeti’s Bright Eye Care Hospital, Refractive surgery offers
            a highly effective way to reduce or eliminate the need for
            corrective lenses. The best option for you depends on your
            prescription, corneal characteristics, and eye health.
          </p>
          <p className="font-bold text-cyan-700 text-lg">
            For questions or appointments, contact Dr. Preeti’s Bright Eye Care
            Hospital. Your eyesight deserves the best.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "dryeye",
    title: "Dry Eye Disease",
    image: "/Dry eye.png",
    description:
      "Dry eye disease (DED)—also called keratoconjunctivitis sicca or ocular surface disease—is a prevalent, multifactorial condition where the eyes do not produce enough quality tears, or tears evaporate too quickly. This results in a loss of tear film homeostasis, causing symptoms such as ocular discomfort, visual disturbances, and possible damage to the eye surface.",
    link: "/services/dry-eye-disease",
    content: (
      <>
        {/* Introduction to Dry Eye Disease */}
        <h2 className="text-3xl font-bold text-cyan-900 mb-4">
          What Is Dry Eye Disease?
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Dry eye is a multifactorial disease of the ocular surface
          characterized by a loss of homeostasis of the tear film, and
          accompanied by ocular symptoms.
        </p>

        {/* Anatomy and Function of the Tear Film */}
        <hr className="my-8 border-gray-300" />
        <h2 className="text-3xl font-bold text-cyan-900 mb-4">
          Anatomy and Function of the Tear Film
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          The tear film is a vital structure with three interactive layers:
        </p>
        <ul className="list-disc list-inside ml-4 text-base text-gray-700 space-y-2 mb-6">
          <li>
            <strong>Lipid (oil) layer:</strong> Outermost layer, secreted by the
            meibomian glands, prevents evaporation.
          </li>
          <li>
            <strong>Aqueous layer:</strong> Produced by the lacrimal glands,
            provides hydration, nutrients, and antimicrobial proteins.
          </li>
          <li>
            <strong>Mucin layer:</strong> Generated by conjunctival goblet
            cells, helps the aqueous part adhere to the corneal surface.
          </li>
        </ul>
        <p className="text-lg text-gray-700">
          A healthy, stable tear film is essential for lubrication, protection,
          and clear vision.
        </p>

        {/* Epidemiology & Societal Impact */}
        <hr className="my-8 border-gray-300" />
        <h2 className="text-3xl font-bold text-cyan-900 mb-4">
          Epidemiology & Societal Impact
        </h2>
        <ul className="list-disc list-inside ml-4 text-base text-gray-700 space-y-2">
          <li>
            <strong>Prevalence:</strong> Estimates range from{" "}
            <strong>5% to 34%</strong> of the general population, rising to{" "}
            <strong>70%</strong> in older adults.
          </li>
          <li>
            <strong>Demographics:</strong> Older age, female sex, and specific
            environmental factors increase risk. Prevalence varies significantly
            by region.
          </li>
          <li>
            <strong>Impact:</strong> DED can impair daily activities such as
            reading, driving, and computer use, and substantially reduce quality
            of life due to chronic discomfort and fluctuating vision.
          </li>
        </ul>

        {/* Causes & Risk Factors */}
        <hr className="my-8 border-gray-300" />
        <h2 className="text-3xl font-bold text-cyan-900 mb-4">
          Causes & Risk Factors
        </h2>
        <div className="space-y-4 text-base text-gray-700">
          <p>
            Dry eye arises when tear production is inadequate or tears evaporate
            faster than normal. Common causes include:
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>Aging and hormonal changes (menopause)</li>
            <li>
              Autoimmune disorders (e.g., Sjögren’s syndrome, rheumatoid
              arthritis)
            </li>
            <li>
              Medications (e.g., antihistamines, antidepressants, hormone
              therapy)
            </li>
            <li>
              Eyelid or gland dysfunction (blepharitis, meibomian gland
              dysfunction)
            </li>
            <li>
              Environmental conditions (wind, smoke, dry air, prolonged screen
              use)
            </li>
            <li>Contact lens use and refractive surgery</li>
          </ul>
        </div>

        {/* Tear Film Instability & Pathophysiology */}
        <hr className="my-8 border-gray-300" />
        <h2 className="text-3xl font-bold text-cyan-900 mb-4">
          Tear Film Instability & Pathophysiology
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          DED is a cyclical process involving:
        </p>
        <ul className="list-disc list-inside ml-4 text-base text-gray-700 space-y-2">
          <li>
            <strong>Tear film hyperosmolarity:</strong> A rise in tear
            concentration damages ocular surface cells.
          </li>
          <li>
            <strong>Chronic inflammation:</strong> The release of inflammatory
            cells and cytokines perpetuates the cycle.
          </li>
          <li>
            <strong>Ocular surface tissue damage:</strong> Breakdown of the
            epithelium increases the risk of infection.
          </li>
        </ul>

        {/* Classification & Subtypes */}
        <hr className="my-8 border-gray-300" />
        <h2 className="text-3xl font-bold text-cyan-900 mb-4">
          Classification & Subtypes
        </h2>
        <div className="space-y-4 text-base text-gray-700">
          <p>Dry eye can be classified into two main subtypes:</p>
          <ul className="list-disc list-inside ml-4">
            <li>
              <strong>Aqueous-deficient dry eye:</strong> Caused by a lack of
              tear production from the lacrimal glands. This accounts for less
              than 10% of cases and is often associated with systemic autoimmune
              diseases.
            </li>
            <li>
              <strong>Evaporative dry eye:</strong> The most common form,
              accounting for over 80% of cases. It is caused by meibomian gland
              dysfunction (MGD), which leads to tears evaporating too quickly.
            </li>
          </ul>
        </div>

        {/* Symptoms and Signs */}
        <hr className="my-8 border-gray-300" />
        <h2 className="text-3xl font-bold text-cyan-900 mb-4">
          Symptoms and Signs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-cyan-700 mb-3">
              Common Symptoms
            </h3>
            <ul className="list-disc list-inside text-base text-gray-700">
              <li>Ocular dryness, itching, grittiness, burning</li>
              <li>Foreign body sensation (“sand in the eye”)</li>
              <li>Redness, excess tearing, blurred or fluctuating vision</li>
              <li>Eye fatigue, discomfort with contact lenses</li>
            </ul>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-cyan-700 mb-3">
              Severe Complications
            </h3>
            <ul className="list-disc list-inside text-base text-gray-700">
              <li>Mucous discharge, crusting</li>
              <li>Light sensitivity (photophobia)</li>
              <li>Corneal damage or scarring</li>
              <li>In very rare cases, sight-threatening ulceration</li>
            </ul>
          </div>
        </div>

        {/* Diagnosis */}
        <hr className="my-8 border-gray-300" />
        <h2 className="text-3xl font-bold text-cyan-900 mb-4">Diagnosis</h2>
        <p className="text-lg text-gray-700 mb-6">
          A diagnosis is based on a detailed history, clinical evaluation, and
          diagnostic tests such as:
        </p>
        <ul className="list-disc list-inside ml-4 text-base text-gray-700 space-y-2">
          <li>
            <strong>Tear film break-up time (TBUT):</strong> Measures tear
            stability.
          </li>
          <li>
            <strong>Schirmer’s test:</strong> Assesses tear volume.
          </li>
          <li>
            <strong>Ocular surface staining:</strong> Uses dyes to detect cell
            damage.
          </li>
          <li>
            <strong>Meibomian gland evaluation:</strong> Assesses oil gland
            output.
          </li>
          <li>
            <strong>Tear osmolarity testing:</strong> Identifies increased salt
            concentration in tears.
          </li>
        </ul>

        {/* Treatment and Management */}
        <hr className="my-8 border-gray-300" />
        <h2 className="text-3xl font-bold text-cyan-900 mb-4">
          Treatment and Management
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Management is tailored to the dry eye subtype and severity, with the
          goal of restoring tear film stability and breaking the cycle of
          inflammation.
        </p>
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold text-cyan-800 mb-2">
              First-line Therapies
            </h3>
            <ul className="list-disc list-inside ml-4 text-base text-gray-700 space-y-2">
              <li>
                <strong>Artificial tears:</strong> Lubricate the ocular surface.
                Preservative-free drops are recommended for frequent use.
              </li>
              <li>
                <strong>Lifestyle modifications:</strong> Increase room
                humidity, limit screen time, and use eyewear to block wind.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-cyan-800 mb-2">
              Eyelid and Gland Hygiene
            </h3>
            <ul className="list-disc list-inside ml-4 text-base text-gray-700 space-y-2">
              <li>
                <strong>Warm compresses:</strong> Melt meibum to open blocked
                glands.
              </li>
              <li>
                <strong>Lid scrubs:</strong> Improve eyelid margin health in
                cases of blepharitis or MGD.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-cyan-800 mb-2">
              Advanced and Emerging Treatments
            </h3>
            <ul className="list-disc list-inside ml-4 text-base text-gray-700 space-y-2">
              <li>
                <strong>Anti-inflammatory therapies:</strong> Topical
                corticosteroids, cyclosporine (Restasis), or lifitegrast
                (Xiidra) for long-term inflammation control.
              </li>
              <li>
                <strong>Punctal plugs:</strong> Small devices to block tear
                drainage, keeping tears on the surface longer.
              </li>
              <li>
                <strong>IPL therapy & thermal pulsation devices:</strong>{" "}
                Unblock and restore meibomian glands for evaporative dry eye.
              </li>
              <li>
                <strong>Scleral contact lenses:</strong> Vault over the ocular
                surface to create a continuous liquid reservoir for lubrication.
              </li>
              <li>
                <strong>Autologous blood serum drops:</strong> Aid surface
                healing in severe cases by providing growth factors.
              </li>
            </ul>
          </div>
        </div>

        {/* Conclusion */}
        <hr className="my-8 border-gray-300" />
        <div className="bg-cyan-50 border border-cyan-200 rounded-3xl p-8 text-center my-10 shadow-md">
          <h3 className="text-3xl font-extrabold text-cyan-900 mb-4">
            A Patient-Centered Approach
          </h3>
          <p className="text-lg text-gray-800 max-w-2xl mx-auto mb-6">
            At Dr. Preeti’s Bright Eye Care Hospital, Dry eye disease is a
            widespread, complex condition that profoundly affects quality of
            life. Its management is evolving rapidly, moving from generic
            artificial tears to tailored, multilayered interventions. In all
            cases, empathetic, individualized patient care remains at the heart
            of successful treatment.
          </p>
          <p className="font-bold text-cyan-700 text-lg">
            A comprehensive evaluation is essential to identify the underlying
            cause and determine the most effective treatment plan for you.
          </p>
          <p className="font-bold text-cyan-700 text-lg">
            For questions or appointments, contact Dr. Preeti’s Bright Eye Care
            Hospital. Your eyesight deserves the best.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "Oculoplastic",
    title: "Oculoplastic Surgery",
    image: "/Aesthetics Studio.jpg",
    description:
      "Oculoplasty—also called oculoplastic surgery—is a super-specialized branch of ophthalmology dedicated to diagnosing, treating, and reconstructing functional and aesthetic disorders involving the eyelids, tear ducts, orbit (eye socket), and adjacent facial structures. It blends advanced medical science with cosmetic artistry to improve vision, comfort, and appearance.",
    link: "/services/Oculoplastic",
    content: (
      <>
        <h2 className="text-3xl font-bold text-cyan-900 mb-4">
          What Is Oculoplastic Surgery?
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Oculoplastic surgery addresses a wide spectrum of medical,
          reconstructive, and cosmetic issues around the eyes.
        </p>
        <ul className="list-disc list-inside ml-4 text-base text-gray-700 space-y-2 mb-6">
          <li>
            <strong>Functional Procedures:</strong> To restore vision, protect
            the eye surface, and ensure healthy tear drainage.
          </li>
          <li>
            <strong>Reconstructive Surgeries:</strong> For trauma, tumors, or
            congenital deformities, aiming to restore function and normal
            anatomy.
          </li>
          <li>
            <strong>Aesthetic/Enhancement Surgeries:</strong> Focused on
            rejuvenating the periorbital area for a more youthful appearance.
          </li>
        </ul>

        <hr className="my-8 border-gray-300" />

        <h2 className="text-3xl font-bold text-cyan-900 mb-4">
          Anatomical Areas Involved
        </h2>
        <ul className="list-disc list-inside ml-4 text-base text-gray-700 space-y-2">
          <li>
            <strong>Eyelids:</strong> Managing drooping (ptosis), malposition
            (entropion, ectropion), cancers, and excess skin/fat.
          </li>
          <li>
            <strong>Tear Ducts:</strong> Correcting blockages to resolve tearing
            and infections.
          </li>
          <li>
            <strong>Orbit:</strong> Managing tumors, trauma, inflammation, or
            Graves’ (thyroid eye) disease.
          </li>
          <li>
            <strong>Periorbital and Midface:</strong> Lifting brows, correcting
            sunken eyes, and reconstructing post-injury defects.
          </li>
        </ul>

        <hr className="my-8 border-gray-300" />

        <h2 className="text-3xl font-bold text-cyan-900 mb-4">
          Common Procedures in Oculoplastic Surgery
        </h2>
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Procedure
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Main Uses
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Notes
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Blepharoplasty
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  Removes excess skin/fat, improves vision & aesthetics
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  Both upper and lower lids
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Ptosis Surgery
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  Lifts droopy lids for better vision and cosmesis
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  Muscle tightening/repair
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Entropion/Ectropion Repair
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  Corrects misdirected lashes/lids
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  Prevents corneal damage
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Tear Duct Surgery
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  Treats blockages, resolves tearing/infections
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  Dacryocystorhinostomy
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Orbital Surgery
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  Tumor removal, fracture repair, decompression
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  Eyeball and socket safety
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Oculoplastic Aesthetics
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  Botox, fillers, midface and brow lifts
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  Minimally invasive, quick recovery
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr className="my-8 border-gray-300" />

        <h2 className="text-3xl font-bold text-cyan-900 mb-4">
          Benefits: Why Oculoplastic Surgery Is Critical
        </h2>
        <ul className="list-disc list-inside ml-4 text-base text-gray-700 space-y-2">
          <li>
            <strong>Restores/Preserves Vision:</strong> Corrects physical
            obstructions like drooping eyelids.
          </li>
          <li>
            <strong>Eye Protection:</strong> Proper lid function shields the eye
            from dryness, injury, and infection.
          </li>
          <li>
            <strong>Improved Tear Drainage:</strong> Eliminates constant tearing
            and discomfort caused by blockages.
          </li>
          <li>
            <strong>Cancer Removal:</strong> Life- and vision-saving tumor
            excision with minimal cosmetic deformity.
          </li>
          <li>
            <strong>Reversal of Aging:</strong> Non-surgical and surgical
            rejuvenation achieves natural, beautiful facial harmony.
          </li>
          <li>
            <strong>Emotional Wellbeing:</strong> Restoring appearance after
            trauma or disease dramatically improves self-esteem.
          </li>
        </ul>

        <hr className="my-8 border-gray-300" />

        <h2 className="text-3xl font-bold text-cyan-900 mb-4">
          Safety, Risks, and Complications
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          While generally safe, it is important to be aware of potential risks:
        </p>
        <ul className="list-disc list-inside ml-4 text-base text-gray-700 space-y-2">
          <li>
            <strong>Common Risks:</strong> Bleeding, infection, asymmetry, or
            scarring.
          </li>
          <li>
            <strong>Post-Surgical Issues:</strong> Temporary dry eye or wound
            healing problems.
          </li>
          <li>
            <strong>Serious Complications:</strong> Vision impact or retrobulbar
            hemorrhage, which require immediate attention.
          </li>
        </ul>

        <div className="bg-cyan-50 border border-cyan-200 rounded-3xl p-8 text-center my-10 shadow-md">
          <h3 className="text-3xl font-extrabold text-cyan-900 mb-4">
            A Blend of Science and Art
          </h3>
          <p className="text-lg text-gray-800 max-w-2xl mx-auto mb-6">
            At Dr. Preeti’s Bright Eye Care Hospital, oculoplastic surgery
            department is pivotal for providing total eye and facial care,
            blending the science of ophthalmology with the art of aesthetic
            surgery. The field is rapidly evolving, offering ever safer, more
            effective, and natural-appearing results.
          </p>
          <p className="font-bold text-cyan-700 text-lg">
            By restoring both function and appearance, oculoplastic services
            deliver life-changing improvements for patients across all ages and
            walks of life.
          </p>
          <p className="font-bold text-cyan-700 text-lg">
            For questions or appointments, contact Dr. Preeti’s Bright Eye Care
            Hospital. Your eyesight deserves the best.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "Vitreoretinal Services",
    title: "Vitreoretinal Services",
    image: "/Vitreoretinal Services.png",
    description:
      "Vitreoretinal services are specialized offerings within advanced eye hospitals that focus on the diagnosis, treatment, and surgical management of diseases affecting the retina, vitreous, and macula. These services represent a subspecialty of ophthalmology, blending cutting-edge technology, expert care, and holistic patient management to address some of the most vision-threatening eye conditions.",
    link: "/services/vitreoretinal-services",
    content: (
      <>
        <h2 className="text-3xl font-bold text-cyan-900 mb-4">
          What Are Vitreoretinal Services?
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          These services encompass both medical and surgical interventions for
          conditions that impact the back portion of the eye:
        </p>
        <ul className="list-disc list-inside ml-4 text-base text-gray-700 space-y-2 mb-6">
          <li>
            <strong>Retina:</strong> The light-sensitive tissue lining the back
            of the eye, essential for vision.
          </li>
          <li>
            <strong>Vitreous:</strong> The clear, gel-like substance filling the
            eye and supporting its structure.
          </li>
          <li>
            <strong>Macula:</strong> The central part of the retina, responsible
            for sharp, detailed vision.
          </li>
        </ul>

        <hr className="my-8 border-gray-300" />

        <h2 className="text-3xl font-bold text-cyan-900 mb-4">
          Key Diseases Managed
        </h2>
        <ul className="list-disc list-inside ml-4 text-base text-gray-700 space-y-2">
          <li>
            <strong>Retinal Detachment:</strong> Separation of the retina from
            its underlying support tissue.
          </li>
          <li>
            <strong>Diabetic Retinopathy:</strong> Complications from diabetes
            affecting retinal blood vessels.
          </li>
          <li>
            <strong>Age-Related Macular Degeneration (AMD):</strong>{" "}
            Degenerative condition causing central vision loss.
          </li>
          <li>
            <strong>Macular Holes and Macular Pucker:</strong> Central vision
            loss or distortion.
          </li>
          <li>
            <strong>Vitreous Hemorrhage:</strong> Bleeding into the vitreous
            gel.
          </li>
          <li>
            <strong>Retinal Vascular Occlusions:</strong> Blockage of retinal
            blood vessels.
          </li>
          <li>
            <strong>Inherited Retinal Dystrophies:</strong> Genetic diseases
            affecting the retina.
          </li>
        </ul>

        <hr className="my-8 border-gray-300" />

        <h2 className="text-3xl font-bold text-cyan-900 mb-4">
          Diagnostic Technology
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Vitreoretinal specialists use several advanced imaging and diagnostic
          tools:
        </p>
        <ul className="list-disc list-inside ml-4 text-base text-gray-700 space-y-2">
          <li>
            <strong>Optical Coherence Tomography (OCT):</strong> Provides
            high-resolution, cross-sectional images of the retina.
          </li>
          <li>
            <strong>Fundus Photography and Widefield Imaging:</strong> For
            documentation and analysis of the retina.
          </li>
          <li>
            <strong>Fluorescein Angiography:</strong> Visualizes retinal
            circulation by using a dye.
          </li>
          <li>
            <strong>B-scan Ultrasonography:</strong> Imaging when the view is
            clouded by bleeding or a cataract.
          </li>
        </ul>

        <hr className="my-8 border-gray-300" />

        <h2 className="text-3xl font-bold text-cyan-900 mb-4">
          Medical and Surgical Treatments
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold text-cyan-800 mb-2">
              Medical Treatments
            </h3>
            <ul className="list-disc list-inside ml-4 text-base text-gray-700 space-y-2">
              <li>
                <strong>Intravitreal Injections:</strong> Deliver medications
                (anti-VEGF agents, steroids) directly into the eye.
              </li>
              <li>
                <strong>Laser Photocoagulation:</strong> Treats tears, leaking
                vessels, or abnormal blood vessel growth.
              </li>
              <li>
                <strong>Cryotherapy:</strong> A freezing treatment for selected
                retinal problems.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-cyan-800 mb-2">
              Surgical Services
            </h3>
            <ul className="list-disc list-inside ml-4 text-base text-gray-700 space-y-2">
              <li>
                <strong>Pars Plana Vitrectomy (PPV):</strong> Removal of the
                vitreous gel to manage retinal detachment, remove blood, or
                repair macular holes.
              </li>
              <li>
                <strong>Scleral Buckling:</strong> Using a silicone band to
                repair retinal detachments.
              </li>
              <li>
                <strong>Pneumatic Retinopexy:</strong> Injects a gas bubble to
                reattach the retina.
              </li>
              <li>
                <strong>Membrane Peeling:</strong> For macular holes or puckers.
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-8 border-gray-300" />

        <h2 className="text-3xl font-bold text-cyan-900 mb-4">
          Innovations and Advanced Care
        </h2>
        <ul className="list-disc list-inside ml-4 text-base text-gray-700 space-y-2">
          <li>
            <strong>Minimally Invasive Vitrectomy (MIVS):</strong> Allows faster
            healing and lower infection risk.
          </li>
          <li>
            <strong>Robotic Surgery:</strong> Improves outcomes in complex
            cases.
          </li>
          <li>
            <strong>Gene and Stem Cell Therapy:</strong> Emerging options for
            inherited retinal diseases.
          </li>
        </ul>

        <div className="bg-cyan-50 border border-cyan-200 rounded-3xl p-8 text-center my-10 shadow-md">
          <h3 className="text-3xl font-extrabold text-cyan-900 mb-4">
            Why Choose Vitreoretinal Services at an Eye Hospital?
          </h3>
          <p className="text-lg text-gray-800 max-w-2xl mx-auto mb-6">
            Vitreoretinal services are a cornerstone of modern eye hospitals,
            using technology, expertise, and compassionate care to manage the
            most challenging retinal and vitreous diseases.
          </p>
          <p className="font-bold text-cyan-700 text-lg">
            We provide hope for preserving and restoring sight in conditions
            where vision loss was once considered inevitable.
          </p>
          <p className="font-bold text-cyan-700 text-lg">
            For questions or appointments, contact Dr. Preeti’s Bright Eye Care
            Hospital. Your eyesight deserves the best.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "Glaucoma",
    title: "Glaucoma",
    image: "/Glaucoma.png",
    description:
      "Glaucoma is a group of progressive optic neuropathies that damage the optic nerve, commonly due to increased intraocular pressure (IOP). Often referred to as the 'silent thief of sight,' glaucoma frequently advances without symptoms until substantial vision loss has occurred. It is among the leading causes of irreversible blindness worldwide.",
    link: "/services/glaucoma",
    content: (
      <>
        <h2 className="text-3xl font-bold text-cyan-900 mb-4">
          Anatomy and Physiology Relevant to Glaucoma
        </h2>
        <ul className="list-disc list-inside ml-4 text-base text-gray-700 space-y-2 mb-6">
          <li>
            <strong>Optic Nerve:</strong> Glaucoma damages the optic nerve,
            which transmits visual information to the brain.
          </li>
          <li>
            <strong>Aqueous Humor Dynamics:</strong> Elevated intraocular
            pressure (IOP) is caused by an imbalance between the production and
            drainage of aqueous humor.
          </li>
        </ul>

        <hr className="my-8 border-gray-300" />

        <h2 className="text-3xl font-bold text-cyan-900 mb-4">
          Classification and Types of Glaucoma
        </h2>
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type of Glaucoma
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Defining Features
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Prevalence
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Primary Open-Angle Glaucoma
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  Open anterior chamber angle; slow, progressive IOP elevation
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  80–90% (USA)
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Primary Angle-Closure Glaucoma
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  Angle closure prevents aqueous outflow; rapid IOP rise
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  10–15%
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Normal-Tension Glaucoma
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  Optic nerve damage at statistically normal IOP
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  ~20%
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Secondary Glaucoma
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  Due to an underlying condition (trauma, steroids)
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  Variable
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr className="my-8 border-gray-300" />

        <h2 className="text-3xl font-bold text-cyan-900 mb-4">
          Symptoms and Clinical Presentation
        </h2>
        <ul className="list-disc list-inside ml-4 text-base text-gray-700 space-y-2">
          <li>
            <strong>Early Stages:</strong> Usually asymptomatic, with no
            noticeable vision changes.
          </li>
          <li>
            <strong>Advanced Disease:</strong> Peripheral vision loss, leading
            to “tunnel vision.”
          </li>
          <li>
            <strong>Acute Angle-Closure:</strong> Can cause sudden eye pain,
            redness, halos around lights, and nausea.
          </li>
        </ul>

        <hr className="my-8 border-gray-300" />

        <h2 className="text-3xl font-bold text-cyan-900 mb-4">Diagnosis</h2>
        <p className="text-lg text-gray-700 mb-6">
          A comprehensive eye exam is crucial for early detection and includes:
        </p>
        <ul className="list-disc list-inside ml-4 text-base text-gray-700 space-y-2">
          <li>
            <strong>Tonometry:</strong> Measures intraocular pressure (IOP).
          </li>
          <li>
            <strong>Gonioscopy:</strong> Evaluates the anterior chamber angle.
          </li>
          <li>
            <strong>Ophthalmoscopy/OCT:</strong> Visualizes and images the optic
            nerve for damage.
          </li>
          <li>
            <strong>Visual Field Testing:</strong> Maps peripheral vision loss.
          </li>
          <li>
            <strong>Pachymetry:</strong> Measures corneal thickness, which
            influences IOP readings.
          </li>
        </ul>

        <hr className="my-8 border-gray-300" />

        <h2 className="text-3xl font-bold text-cyan-900 mb-4">
          Goals and Principles of Management
        </h2>
        <ul className="list-disc list-inside ml-4 text-base text-gray-700 space-y-2">
          <li>
            <strong>Preserve Visual Function:</strong> The primary goal is to
            maintain the patient's useful vision and quality of life.
          </li>
          <li>
            <strong>Lower & Stabilize IOP:</strong> Since IOP is the only
            treatable risk factor, all interventions focus on reducing and
            maintaining it.
          </li>
          <li>
            <strong>Prevent/Slow Progression:</strong> Treatment intensity is
            adjusted based on disease severity, age, and risk.
          </li>
        </ul>

        <hr className="my-8 border-gray-300" />

        <h2 className="text-3xl font-bold text-cyan-900 mb-4">
          Medical Treatments
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          First-line therapies usually involve eye drops:
        </p>
        <ul className="list-disc list-inside ml-4 text-base text-gray-700 space-y-2">
          <li>
            <strong>Prostaglandin Analogues:</strong> Increase aqueous outflow.
            (e.g., Latanoprost)
          </li>
          <li>
            <strong>Beta-Blockers:</strong> Reduce aqueous humor production.
            (e.g., Timolol)
          </li>
          <li>
            <strong>Alpha-Agonists:</strong> Decrease production and increase
            outflow. (e.g., Brimonidine)
          </li>
        </ul>

        <hr className="my-8 border-gray-300" />

        <h2 className="text-3xl font-bold text-cyan-900 mb-4">
          Surgical Management
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          When eye drops or laser treatments are insufficient, surgery may be
          recommended:
        </p>
        <ul className="list-disc list-inside ml-4 text-base text-gray-700 space-y-2">
          <li>
            <strong>Trabeculectomy:</strong> The gold standard for surgical IOP
            control, creating a new drainage pathway.
          </li>
          <li>
            <strong>Minimally Invasive Glaucoma Surgery (MIGS):</strong> A group
            of procedures for mild-to-moderate glaucoma with a rapid recovery.
          </li>
          <li>
            <strong>Glaucoma Drainage Devices (GDDs):</strong> Implants for
            severe or refractory cases (e.g., Ahmed, Baerveldt).
          </li>
        </ul>

        <hr className="my-8 border-gray-300" />

        <h2 className="text-3xl font-bold text-cyan-900 mb-4">
          Monitoring and Follow-Up
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Long-term surveillance is essential for managing glaucoma:
        </p>
        <ul className="list-disc list-inside ml-4 text-base text-gray-700 space-y-2">
          <li>
            <strong>Regular IOP Measurements:</strong> To ensure pressure
            remains stable.
          </li>
          <li>
            <strong>Visual Field Testing:</strong> To monitor for any
            progression of vision loss.
          </li>
          <li>
            <strong>OCT/Optic Disc Imaging:</strong> To check for structural
            changes in the optic nerve.
          </li>
        </ul>

        <div className="bg-cyan-50 border border-cyan-200 rounded-3xl p-8 text-center my-10 shadow-md">
          <h3 className="text-3xl font-extrabold text-cyan-900 mb-4">
            Early Detection Is Key
          </h3>
          <p className="text-lg text-gray-800 max-w-2xl mx-auto mb-6">
            Glaucoma care at Dr. Preeti’s Bright Eye Care Hospital is a highly
            specialized, technology-driven field focused on early detection,
            customized intervention, long-term preservation of vision, and
            holistic patient support.
          </p>
          <p className="font-bold text-cyan-700 text-lg">
            The multidisciplinary, patient-centered philosophy integrates the
            best of medicine, surgery, and therapy to combat this
            sight-threatening disease.
          </p>
          <p className="font-bold text-cyan-700 text-lg">
            For questions or appointments, contact Dr. Preeti’s Bright Eye Care
            Hospital. Your eyesight deserves the best.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "Pediatric",
    title: "Pediatric Eye Care",
    image: "/Pediatric.webp",
    description:
      "Pediatric eye care is a subspecialty of ophthalmology dedicated to diagnosing, treating, and preventing a wide spectrum of eye and vision problems in children, from newborns to teenagers. Clear vision in childhood is essential for educational success, social interaction, and proper development, making specialized pediatric eye services crucial for healthy, thriving children.",
    link: "/services/pediatric-eye-care",
    content: (
      <>
        <h2 className="text-3xl font-bold text-cyan-900 mb-4">
          The Importance of Early Eye Care
        </h2>
        <ul className="list-disc list-inside ml-4 text-base text-gray-700 space-y-2 mb-6">
          <li>
            <strong>Dynamic Vision Development:</strong> A child's visual system
            evolves rapidly, making early detection and correction of
            abnormalities vital.
          </li>
          <li>
            <strong>Preventing Permanent Vision Loss:</strong> Untreated
            problems like amblyopia can cause permanent vision loss and
            developmental delays.
          </li>
        </ul>

        <hr className="my-8 border-gray-300" />

        <h2 className="text-3xl font-bold text-cyan-900 mb-4">
          Common Pediatric Eye Conditions
        </h2>
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Condition
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Description
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Early Signs
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Treatment Approach
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Amblyopia
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  “Lazy eye”—one eye fails to develop normal vision
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  Poor vision, eye misalignment
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  Glasses, patching, pharmacologic therapy
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Strabismus
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  Eye misalignment (crossed/wandering eyes)
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  Eyes not moving together
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  Glasses, patching, surgery
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Pediatric Cataract
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  Clouding of the lens at birth or childhood
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  Cloudy pupil, poor tracking, vision loss
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  Surgery, glasses/contacts, therapy
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Refractive Errors
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  Myopia, hyperopia, astigmatism
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  Squinting, sitting near TV, headaches
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  Glasses, contact lenses
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Congenital Glaucoma
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  Elevated IOP damages optic nerve
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  Enlarged eyes, light sensitivity, tearing
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  Medications, surgery
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-lg text-gray-700">
          Regular check-ups can catch many issues before they cause permanent
          problems.
        </p>

        <hr className="my-8 border-gray-300" />

        <h2 className="text-3xl font-bold text-cyan-900 mb-4">
          Pediatric Eye Exams: What to Expect
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          The American Optometric Association recommends eye exams at these
          milestones:
        </p>
        <ul className="list-disc list-inside ml-4 text-base text-gray-700 space-y-2">
          <li>
            <strong>First Exam:</strong> At 6 months old, even without symptoms.
          </li>
          <li>
            <strong>Follow-ups:</strong> At age 3, before school entry, and
            annually thereafter.
          </li>
        </ul>

        <hr className="my-8 border-gray-300" />

        <h2 className="text-3xl font-bold text-cyan-900 mb-4">
          Warning Signs to Watch For
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Parents should be vigilant for these symptoms, which may indicate a
          vision problem:
        </p>
        <ul className="list-disc list-inside ml-4 text-base text-gray-700 space-y-2">
          <li>Constant eye rubbing, squinting, or head tilting.</li>
          <li>One eye turning in or out.</li>
          <li>Cloudy or white spots in the pupil.</li>
          <li>Light sensitivity or excessive tearing.</li>
          <li>Red, swollen, or painful eyes.</li>
          <li>Delayed visual milestones.</li>
        </ul>
        <p className="text-lg text-gray-700 mt-4">
          If any of these symptoms are observed, consult a pediatric eye
          specialist immediately.
        </p>

        <div className="bg-cyan-50 border border-cyan-200 rounded-3xl p-8 text-center my-10 shadow-md">
          <h3 className="text-3xl font-extrabold text-cyan-900 mb-4">
            Why Choose a Specialized Pediatric Service?
          </h3>
          <p className="text-lg text-gray-800 max-w-2xl mx-auto mb-6">
            At Dr. Preeti’s Bright Eye Care Hospital, Pediatric ophthalmology
            services offer family-centered, expert diagnostics, prevention,
            treatments, and education. Our team is specifically trained to
            provide a gentle, child-friendly approach to eye care.
          </p>
          <p className="font-bold text-cyan-700 text-lg">
            By ensuring a child's vision is healthy from an early age, we help
            them grow and explore the world with confidence and clarity.
          </p>
          <p className="font-bold text-cyan-700 text-lg">
            For questions or appointments, contact Dr. Preeti’s Bright Eye Care
            Hospital. Your eyesight deserves the best.
          </p>
        </div>
      </>
    ),
  },

  {
    id: "Neuro Ophthalmology",
    title: "Neuro-Ophthalmology",
    image: "/neuro ophthalmology.png",
    description:
      "Neuro-ophthalmology is a subspecialty of both ophthalmology and neurology focused on the relationship between the nervous system and visual function. It addresses visual problems that originate from disorders of the brain, optic nerves, and the connections that control sight and eye movement, requiring expertise that bridges both medical fields.",
    link: "/services/neuro-ophthalmology",
    content: (
      <>
        <h2 className="text-3xl font-bold text-cyan-900 mb-4">
          The Scope of Neuro-Ophthalmology
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Neuro-ophthalmology diagnoses and manages disorders where vision is
          affected by disease or injury involving the brain, cranial nerves,
          optic nerves, and extraocular muscles—not just the eyes themselves.
          This subspecialty bridges the gap between traditional ophthalmology
          and neurology.
        </p>

        <hr className="my-8 border-gray-300" />

        <h2 className="text-3xl font-bold text-cyan-900 mb-4">
          Major Neuro-ophthalmic Disorders
        </h2>
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Condition
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Main Features
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Etiology/Associations
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Optic Neuritis
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  Sudden vision loss, pain on eye movement
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  Multiple Sclerosis (MS), infections
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Ischemic Optic Neuropathy
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  Painless vision loss, often in the elderly
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  Vascular risk, giant cell arteritis
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Papilledema
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  Swelling of the optic disc due to raised intracranial pressure
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  Tumors, idiopathic intracranial hypertension (IIH)
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Cranial Nerve Palsies
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  Double vision, abnormal eye movements, ptosis
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  Diabetes, hypertension, aneurysm
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Myasthenia Gravis
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  Fluctuating ptosis, double vision, muscle weakness
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">Autoimmune</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr className="my-8 border-gray-300" />

        <h2 className="text-3xl font-bold text-cyan-900 mb-4">
          Symptoms and Clinical Presentation
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Patients are often referred to a neuro-ophthalmologist for symptoms
          that do not have a clear cause in a routine eye exam. These include:
        </p>
        <ul className="list-disc list-inside ml-4 text-base text-gray-700 space-y-2">
          <li>Sudden or gradual vision loss.</li>
          <li>Double vision (diplopia).</li>
          <li>Drooping eyelid (ptosis).</li>
          <li>Visual field defects.</li>
          <li>Abnormal eye movements.</li>
          <li>Headaches or scalp tenderness.</li>
          <li>Unexplained or complex visual phenomena.</li>
        </ul>

        <hr className="my-8 border-gray-300" />

        <h2 className="text-3xl font-bold text-cyan-900 mb-4">
          The Neuro-Ophthalmic Examination
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          A comprehensive examination is key to diagnosis, and may include:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-cyan-700 mb-3">
              Basic Components
            </h3>
            <ul className="list-disc list-inside text-base text-gray-700">
              <li>Detailed patient history and risk review.</li>
              <li>Visual acuity and color vision testing.</li>
              <li>Pupil exam and ocular motility assessment.</li>
              <li>Visual field testing and fundus exam.</li>
            </ul>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-cyan-700 mb-3">
              Advanced Diagnostic Tools
            </h3>
            <ul className="list-disc list-inside text-base text-gray-700">
              <li>MRI/CT of the brain or orbit.</li>
              <li>Optical Coherence Tomography (OCT) of the optic nerve.</li>
              <li>Blood tests for autoimmune or infectious diseases.</li>
              <li>Lumbar Puncture (in specific cases).</li>
            </ul>
          </div>
        </div>

        <hr className="my-8 border-gray-300" />

        <h2 className="text-3xl font-bold text-cyan-900 mb-4">
          Treatments—Principles and Practice
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Management is highly individualized and often requires a
          multidisciplinary approach.
        </p>
        <ul className="list-disc list-inside ml-4 text-base text-gray-700 space-y-2">
          <li>
            <strong>Medical Management:</strong> Corticosteroids for
            inflammation, immunomodulators, or other targeted medications.
          </li>
          <li>
            <strong>Surgical Intervention:</strong> Tumor excision or
            decompression for compressive neuropathies.
          </li>
          <li>
            <strong>Vision Rehabilitation:</strong> Low vision aids,
            occupational therapy for irreversible deficits.
          </li>
          <li>
            <strong>Disease-Specific Treatments:</strong> Immediate high-dose
            steroids for giant cell arteritis, or immunosuppression for
            Myasthenia Gravis.
          </li>
        </ul>

        <div className="bg-cyan-50 border border-cyan-200 rounded-3xl p-8 text-center my-10 shadow-md">
          <h3 className="text-3xl font-extrabold text-cyan-900 mb-4">
            A Collaborative Approach to Care
          </h3>
          <p className="text-lg text-gray-800 max-w-2xl mx-auto mb-6">
            Neuro-ophthalmology is a dynamic field at the intersection of
            neurology and ophthalmology, essential for diagnosing and treating
            complex conditions affecting vision due to underlying brain, nerve,
            or systemic diseases.
          </p>
          <p className="font-bold text-cyan-700 text-lg">
            We combine precise diagnosis, collaborative management, and advanced
            diagnostics to preserve sight and optimize quality of life.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "Uveitis",
    title: "Uveitis",
    image: "/Uveitis.png",
    description:
      "Uveitis is a challenging, multifactorial inflammation of the uveal tract of the eye (iris, ciliary body, choroid). It is a significant cause of vision loss worldwide, with a variety of underlying causes, including autoimmune, infectious, and inflammatory processes. Timely recognition and treatment are vital to prevent irreversible visual loss.",
    link: "/services/uveitis",
    content: (
      <>
        <h2 className="text-3xl font-bold text-cyan-900 mb-4">
          Definition and Classification
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Uveitis is classified based on the anatomical location of the
          inflammation:
        </p>
        <ul className="list-disc list-inside ml-4 text-base text-gray-700 space-y-2 mb-6">
          <li>
            <strong>Anterior Uveitis:</strong> Involves the iris and anterior
            chamber (iritis); most common type.
          </li>
          <li>
            <strong>Intermediate Uveitis:</strong> Inflammation centered in the
            vitreous (pars planitis).
          </li>
          <li>
            <strong>Posterior Uveitis:</strong> Affects the retina and/or
            choroid (retinitis, chorioretinitis).
          </li>
          <li>
            <strong>Panuveitis:</strong> Inflammation of all layers of the uvea.
          </li>
        </ul>

        <hr className="my-8 border-gray-300" />

        <h2 className="text-3xl font-bold text-cyan-900 mb-4">
          Clinical Features and Symptoms
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          The symptoms of uveitis vary depending on the location of the
          inflammation:
        </p>
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type of Uveitis
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Typical Symptoms
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Signs
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Anterior
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  Pain, redness, light sensitivity
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  Ciliary flush, small pupil, keratic precipitates
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Intermediate
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  Floaters, mild visual loss
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  Vitritis, “snowballs” or “snowbanking”
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Posterior
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  Painless visual loss, scotomas
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  Retinitis, choroiditis, retinal vasculitis
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Panuveitis
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  Combination of the above
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  Involvement of all segments
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr className="my-8 border-gray-300" />

        <h2 className="text-3xl font-bold text-cyan-900 mb-4">
          Diagnostic Strategy
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          A thorough diagnostic process is crucial to determine the underlying
          cause of uveitis:
        </p>
        <ul className="list-disc list-inside ml-4 text-base text-gray-700 space-y-2">
          <li>
            <strong>Ophthalmic Examination:</strong> Includes visual acuity,
            intraocular pressure measurement, and a detailed look at the
            anterior and posterior segments of the eye.
          </li>
          <li>
            <strong>Ancillary Imaging:</strong> OCT, fluorescein angiography,
            and B-scan ultrasound for a deeper look at the eye's structures.
          </li>
          <li>
            <strong>Laboratory Tests:</strong> Blood tests (e.g., syphilis
            serology, HLA-B27, autoimmune panels) to identify systemic diseases.
          </li>
        </ul>

        <hr className="my-8 border-gray-300" />

        <h2 className="text-3xl font-bold text-cyan-900 mb-4">
          Treatment Overview
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Treatment is tailored to the type and cause of the uveitis and aims to
          control inflammation and prevent complications.
        </p>
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold text-cyan-800 mb-2">
              Medical Treatments
            </h3>
            <ul className="list-disc list-inside ml-4 text-base text-gray-700 space-y-2">
              <li>
                <strong>Corticosteroids:</strong> The mainstay of treatment,
                available in drops, injections, or oral form depending on
                severity.
              </li>
              <li>
                <strong>Immunosuppressive/Immunomodulatory Therapy:</strong> For
                long-term control and to reduce reliance on steroids.
              </li>
              <li>
                <strong>Anti-Infective Agents:</strong> Antibiotics or
                antivirals to treat infectious uveitis.
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-8 border-gray-300" />

        <h2 className="text-3xl font-bold text-cyan-900 mb-4">
          Complications and Prognosis
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Without prompt treatment, uveitis can lead to serious complications,
          including:
        </p>
        <ul className="list-disc list-inside ml-4 text-base text-gray-700 space-y-2">
          <li>Cataract formation and secondary glaucoma.</li>
          <li>Cystoid macular edema and retinal detachment.</li>
          <li>Permanent optic nerve damage and vision loss.</li>
        </ul>

        <div className="bg-cyan-50 border border-cyan-200 rounded-3xl p-8 text-center my-10 shadow-md">
          <h3 className="text-3xl font-extrabold text-cyan-900 mb-4">
            The Importance of Timely and Targeted Care
          </h3>
          <p className="text-lg text-gray-800 max-w-2xl mx-auto mb-6">
            Uveitis is a sight-threatening group of intraocular inflammatory
            disorders requiring rapid, accurate diagnosis and a targeted,
            multidisciplinary management strategy.
          </p>
          <p className="font-bold text-cyan-700 text-lg">
            Early diagnosis and skilled, ongoing care are critical to minimizing
            vision loss and improving the quality of life for uveitis patients.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "Keratoconus",
    title: "Keratoconus",
    image: "/Keratoconus.png",
    description:
      "Keratoconus is a progressive eye disorder where the normally round, dome-shaped cornea gradually thins and bulges outward into a cone shape. This irregular corneal shape distorts light as it enters the eye, leading to blurred and distorted vision. Symptoms usually present during the teenage years or early adulthood.",
    link: "/services/keratoconus",
    content: (
      <>
        <h2 className="text-3xl font-bold text-cyan-900 mb-4">
          Key Symptoms and Signs
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Early symptoms are often subtle, while advanced signs become more
          pronounced:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <h3 className="text-xl font-semibold text-cyan-800 mb-3">
              Early Symptoms
            </h3>
            <ul className="list-disc list-inside text-base text-gray-700 space-y-2">
              <li>Blurred or distorted vision</li>
              <li>Increased sensitivity to light (photophobia) and glare</li>
              <li>Frequent changes in eyeglass prescription</li>
              <li>Difficulty seeing in low-light conditions</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-cyan-800 mb-3">
              Advanced Signs
            </h3>
            <ul className="list-disc list-inside text-base text-gray-700 space-y-2">
              <li>Pronounced irregular astigmatism</li>
              <li>Visible conical protrusion (Munson sign)</li>
              <li>Corneal scarring in severe cases</li>
              <li>Sudden swelling and vision loss (acute hydrops)</li>
            </ul>
          </div>
        </div>

        <hr className="my-8 border-gray-300" />

        <h2 className="text-3xl font-bold text-cyan-900 mb-4">
          Causes and Risk Factors
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Keratoconus is believed to be multifactorial, with both genetic and
          environmental contributors:
        </p>
        <ul className="list-disc list-inside ml-4 text-base text-gray-700 space-y-2">
          <li>
            <strong>Genetic predisposition:</strong> A family history
            significantly increases risk.
          </li>
          <li>
            <strong>Excessive eye rubbing:</strong> Strongly associated with the
            onset and progression of the condition.
          </li>
          <li>
            <strong>Associated conditions:</strong> Allergies, asthma, and Down
            syndrome are known risk factors.
          </li>
          <li>
            <strong>Environmental factors:</strong> Chronic eye irritation and
            UV exposure can play a role.
          </li>
        </ul>

        <hr className="my-8 border-gray-300" />

        <h2 className="text-3xl font-bold text-cyan-900 mb-4">Diagnosis</h2>
        <p className="text-lg text-gray-700 mb-6">
          Early and accurate diagnosis is critical for effective management.
          Diagnostic steps include:
        </p>
        <ul className="list-disc list-inside ml-4 text-base text-gray-700 space-y-2">
          <li>
            <strong>Slit-lamp examination:</strong> Detects subtle corneal signs
            such as thinning or scarring.
          </li>
          <li>
            <strong>Corneal topography and tomography:</strong> The most
            important tests, which map the surface and thickness of the cornea.
          </li>
          <li>
            <strong>Pachymetry:</strong> Gauges corneal thickness to monitor
            disease progression.
          </li>
        </ul>

        <hr className="my-8 border-gray-300" />

        <h2 className="text-3xl font-bold text-cyan-900 mb-4">
          Treatment and Management
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Treatment options are tailored to the severity of the disease, with
          the main goals being to halt progression and improve visual function.
        </p>
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold text-cyan-800 mb-2">
              Conservative (Non-Surgical) Treatments
            </h3>
            <ul className="list-disc list-inside ml-4 text-base text-gray-700 space-y-2">
              <li>
                <strong>Eyeglasses:</strong> Effective in early stages for mild
                vision problems.
              </li>
              <li>
                <strong>Specialized Contact Lenses:</strong> Rigid gas permeable
                (RGP) or scleral lenses are used as the condition advances to
                compensate for corneal irregularity.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-cyan-800 mb-2">
              Medical and Surgical Interventions
            </h3>
            <ul className="list-disc list-inside ml-4 text-base text-gray-700 space-y-2">
              <li>
                <strong>Corneal Cross-Linking (CXL):</strong> A minimally
                invasive procedure that strengthens the cornea and can halt
                disease progression.
              </li>
              <li>
                <strong>Intrastromal Corneal Ring Segments (ICRS):</strong>{" "}
                Small implants placed in the cornea to flatten its shape in mild
                to moderate cases.
              </li>
              <li>
                <strong>Corneal Transplant (Keratoplasty):</strong> For advanced
                cases with profound thinning or scarring, the cornea may be
                replaced with donor tissue.
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-cyan-50 border border-cyan-200 rounded-3xl p-8 text-center my-10 shadow-md">
          <h3 className="text-3xl font-extrabold text-cyan-900 mb-4">
            Early Intervention Is Key
          </h3>
          <p className="text-lg text-gray-800 max-w-2xl mx-auto mb-6">
            If you or someone you know experiences frequent changes in vision,
            especially during adolescence or early adulthood, a thorough eye
            examination with corneal topography is essential.
          </p>
          <p className="font-bold text-cyan-700 text-lg">
            Modern treatments like cross-linking can often halt disease
            progression and delay or prevent the need for a corneal transplant.
          </p>
        </div>
      </>
    ),
  },

  {
    id: "REVERSING DIABETES CLINIC",
    title: "Reversing Diabetes Clinic",
    image: "/REVERSING DIABETES CLINIC.webp",
    description:
      "Reversing Diabetes Clinics are specialized, multidisciplinary centers dedicated to not only managing diabetes but also aiming for its reversal or remission through science-backed methods and holistic patient care. The goal is to achieve sustained normal blood sugar levels (HbA1c less than 6.5%) without the need for diabetes medication or insulin.",
    link: "/services/reversing-diabetes-clinic",
    content: (
      <>
        <h2 className="text-3xl font-bold text-cyan-900 mb-4">
          Core Services and Approaches
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Our clinic uses a comprehensive, team-based approach to help patients
          manage and potentially reverse type 2 diabetes.
        </p>
        <ul className="list-disc list-inside ml-4 text-base text-gray-700 space-y-2">
          <li>
            <strong>Personalized Dietary Planning:</strong> Dietitians create
            tailored plans, focusing on low-carbohydrate and high-fiber diets to
            improve blood sugar control.
          </li>
          <li>
            <strong>Structured Lifestyle Modification:</strong> We provide
            guidance on physical activity and sustainable weight management to
            improve insulin sensitivity.
          </li>
          <li>
            <strong>Comprehensive Medical Care:</strong> Diabetologists and
            endocrinologists provide continuous medical supervision and
            medication adjustments.
          </li>
          <li>
            <strong>Education and Empowerment:</strong> Patients learn how to
            monitor their blood sugar and make long-term, sustainable lifestyle
            changes.
          </li>
        </ul>

        <hr className="my-8 border-gray-300" />

        <h2 className="text-3xl font-bold text-cyan-900 mb-4">
          Unique Aspects at an Eye Hospital-Based Clinic
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Being located in a comprehensive eye hospital provides a unique
          advantage in preventing and managing diabetes-related eye
          complications.
        </p>
        <ul className="list-disc list-inside ml-4 text-base text-gray-700 space-y-2">
          <li>
            <strong>Integrated Eye and Systemic Health:</strong> Our team
            includes ophthalmologists and retina specialists who provide on-site
            monitoring and early treatment for diabetic retinopathy, macular
            edema, and other eye diseases.
          </li>
          <li>
            <strong>Collaborative Multidisciplinary Team:</strong> A 15-member
            team of eye and metabolic health experts works together under one
            roof, ensuring seamless and holistic care.
          </li>
        </ul>

        <hr className="my-8 border-gray-300" />

        <h2 className="text-3xl font-bold text-cyan-900 mb-4">
          Key Points on Diabetes Reversal
        </h2>
        <ul className="list-disc list-inside ml-4 text-base text-gray-700 space-y-2">
          <li>
            <strong>Reversal vs. Remission:</strong> Reversal means bringing
            blood sugar to non-diabetes levels for several months without
            medication.
          </li>
          <li>
            <strong>How It's Achieved:</strong> Intensive lifestyle
            modification, including calorie reduction, weight loss, and regular
            exercise, is the foundation.
          </li>
          <li>
            <strong>Essential Supervision:</strong> It is crucial to have
            medical supervision—never stop medication without consulting your
            doctor.
          </li>
          <li>
            <strong>Likelihood of Success:</strong> Remission is more likely in
            those with a shorter duration of diabetes and high motivation for
            lifestyle change.
          </li>
        </ul>

        <div className="bg-cyan-50 border border-cyan-200 rounded-3xl p-8 text-center my-10 shadow-md">
          <h3 className="text-3xl font-extrabold text-cyan-900 mb-4">
            Protect Your Vision and Overall Health
          </h3>
          <p className="text-lg text-gray-800 max-w-2xl mx-auto mb-6">
            If you are looking to aggressively manage your diabetes, reduce
            medication reliance, and prevent sight-threatening complications, a
            Reversing Diabetes Clinic is an ideal choice.
          </p>
          <p className="font-bold text-cyan-700 text-lg">
            Our integrated approach safeguards not just your blood sugar, but
            your vision and overall health for life.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "General Ophthalmology",
    title: "General Ophthalmology",
    image: "/General+Ophthalmology.jpg",
    description:
      "General ophthalmology is the foundational branch of eye care services in any advanced eye hospital. It encompasses the diagnosis, treatment, management, and prevention of a broad spectrum of eye diseases and vision problems affecting people of all ages. This specialty combines medical, surgical, and optical services to ensure optimal eye health.",
    link: "/services/general-ophthalmology",
    content: (
      <>
        <h2 className="text-3xl font-bold text-cyan-900 mb-4">
          What Does a General Ophthalmologist Do?
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          A general ophthalmologist is a medical doctor specializing in eye and
          visual system care. Their responsibilities include:
        </p>
        <ul className="list-disc list-inside ml-4 text-base text-gray-700 space-y-2">
          <li>
            Performing routine eye examinations for vision and ocular health.
          </li>
          <li>Prescribing glasses and contact lenses for vision correction.</li>
          <li>
            Diagnosing and managing acute and chronic eye diseases with
            medications or minor procedures.
          </li>
          <li>
            Performing surgical procedures such as cataract removal and basic
            glaucoma surgery.
          </li>
          <li>
            Referring patients to subspecialists for complex or advanced eye
            diseases.
          </li>
        </ul>

        <hr className="my-8 border-gray-300" />

        <h2 className="text-3xl font-bold text-cyan-900 mb-4">
          Core Services in General Ophthalmology
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          General ophthalmology provides a wide range of essential eye care
          services:
        </p>
        <ul className="list-disc list-inside ml-4 text-base text-gray-700 space-y-2">
          <li>
            <strong>Comprehensive Eye Exams:</strong> Assessing vision, eye
            alignment, intraocular pressure, and the overall health of the eye's
            structures.
          </li>
          <li>
            <strong>Vision Correction:</strong> Diagnosing refractive errors
            (myopia, hyperopia, astigmatism) and prescribing corrective lenses.
          </li>
          <li>
            <strong>Diagnosis & Treatment of Eye Diseases:</strong> Managing
            common conditions like dry eye, conjunctivitis, and eye allergies.
          </li>
          <li>
            <strong>Minor Eye Procedures:</strong> Removing foreign bodies and
            treating styes.
          </li>
          <li>
            <strong>Health Counseling:</strong> Advising on preventive eye
            health, safety, and lifestyle choices.
          </li>
        </ul>

        <hr className="my-8 border-gray-300" />

        <h2 className="text-3xl font-bold text-cyan-900 mb-4">
          Common Eye Conditions Managed
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          General ophthalmologists are skilled in managing a broad spectrum of
          conditions, including:
        </p>
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Condition
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Brief Description
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Cataracts
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  Clouding of the eye’s lens causing blurred vision.
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Glaucoma
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  Group of diseases damaging the optic nerve.
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Diabetic Retinopathy
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  Diabetes-related damage to retinal blood vessels.
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Dry Eye
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  Inadequate or poor-quality tear production.
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Conjunctivitis
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  Inflammation or infection of the conjunctiva.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr className="my-8 border-gray-300" />

        <h2 className="text-3xl font-bold text-cyan-900 mb-4">
          Importance of Routine Eye Exams
        </h2>
        <ul className="list-disc list-inside ml-4 text-base text-gray-700 space-y-2">
          <li>
            <strong>Early Detection:</strong> Many sight-threatening diseases,
            like glaucoma and diabetic retinopathy, are asymptomatic in their
            early stages.
          </li>
          <li>
            <strong>Prevention of Vision Loss:</strong> Early intervention is
            crucial to prevent permanent damage and maintain a high quality of
            life.
          </li>
          <li>
            <strong>General Health Indicators:</strong> The eyes can reveal
            signs of systemic conditions such as diabetes and hypertension.
          </li>
        </ul>

        <div className="bg-cyan-50 border border-cyan-200 rounded-3xl p-8 text-center my-10 shadow-md">
          <h3 className="text-3xl font-extrabold text-cyan-900 mb-4">
            The Cornerstone of Eye Care
          </h3>
          <p className="text-lg text-gray-800 max-w-2xl mx-auto mb-6">
            General ophthalmology is the cornerstone of eye care, offering a
            wide range of services from vision correction to the management of
            serious eye diseases.
          </p>
          <p className="font-bold text-cyan-700 text-lg">
            Through regular exams and a collaborative approach with
            subspecialists, general ophthalmologists help protect and enhance
            vision for people of all ages.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "Cornea Transplant",
    title: "Cornea Transplant",
    image: "/Cornea-Transplant.jpg",
    description:
      "Cornea transplant, also known as keratoplasty, is a surgical procedure that replaces a damaged or diseased cornea with healthy donor tissue. It can restore vision, reduce pain, and improve the appearance of the cornea.",
    link: "/services/cornea-transplant",
    content: (
      <>
        <h2 className="text-3xl font-bold text-cyan-900 mb-4">
          What is the Cornea?
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          The cornea is the clear, outermost layer at the front of your eye,
          much like a crystal-clear window. This transparent tissue plays a
          crucial role in focusing light onto the retina, enabling you to see
          clearly. Its smooth, curved surface is responsible for about
          two-thirds of your eye's focusing power. A healthy cornea is essential
          for good vision. Comprised of five distinct layers, the cornea acts as
          a protective barrier, shielding the eye from germs, dust, and other
          external irritants. Its ability to regenerate and heal minor scratches
          is remarkable, but when it suffers significant damage or disease, its
          clarity can be compromised, leading to blurred or distorted vision.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          Unlike other tissues in the body, the cornea has no blood vessels,
          which is why it remains transparent. It receives its nourishment from
          tears and the aqueous humor, the fluid inside the eye. This unique
          characteristic is also why a corneal transplant is often a successful
          procedure, as there is a lower risk of rejection compared to other
          organ transplants. When the cornea becomes cloudy, scarred, or
          misshapen due to disease, injury, or inherited conditions, it can
          severely impact vision. This loss of clarity is often the primary
          reason a person may need a corneal transplant to restore their sight.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          Understanding the cornea's function is the first step in appreciating
          the importance of its health. From protecting the eye to focusing
          light, this small but mighty part of our anatomy is vital for our
          sense of sight. When its integrity is compromised, the world can
          become a blur. That's why advanced medical interventions, like those
          offered at Dr. Preeti's Bright Eye Care Hospital, are so critical for
          patients experiencing corneal issues. We specialize in diagnosing and
          treating a wide range of corneal conditions to help you regain your
          clear vision and quality of life.
        </p>

        <hr className="my-8 border-gray-300" />

        <h2 className="text-3xl font-bold text-cyan-900 mb-4">
          When is a Cornea Transplant Required?
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          A cornea transplant, also known as keratoplasty, becomes necessary
          when the cornea is so damaged or diseased that it significantly
          affects a person's vision and cannot be corrected with glasses,
          contact lenses, or other treatments. The most common reasons for a
          transplant include a condition called keratoconus, where the cornea
          thins and bulges into a cone-like shape, and Fuch's dystrophy, a
          genetic disorder that causes the cornea to swell and become cloudy.
          Other conditions that may necessitate a transplant include corneal
          scarring from infections, injuries, or previous eye surgeries.
          Essentially, if the cornea's transparency is compromised, and light
          cannot pass through it properly, a transplant may be the best course
          of action to restore clear vision.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          The decision to undergo a cornea transplant is made after a thorough
          evaluation by a qualified ophthalmologist. The doctor will assess the
          severity of the corneal damage and discuss all available treatment
          options. For some patients, a partial thickness transplant may be
          sufficient, while others may require a full thickness transplant. The
          goal of the surgery is to replace the damaged corneal tissue with a
          healthy, clear donor cornea. This procedure can dramatically improve
          vision, reduce pain, and restore the eye's natural appearance. While
          the idea of surgery may be intimidating, the procedure is highly
          successful, with millions of people worldwide benefiting from renewed
          sight.
        </p>

        <hr className="my-8 border-gray-300" />

        <h2 className="text-3xl font-bold text-cyan-900 mb-4">
          Why Choose Dr. Preeti's Bright Eye Care Hospital?
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          At Dr. Preeti's Bright Eye Care Hospital, we are dedicated to
          providing the highest standard of care for all your corneal health
          needs. Our commitment to excellence, combined with our compassionate
          approach, ensures that every patient receives personalized treatment
          tailored to their specific condition. Dr. Preeti is a renowned expert
          in ophthalmology, with a deep understanding of complex corneal
          diseases and the latest surgical techniques. We believe in empowering
          our patients through education, ensuring you have a full understanding
          of your diagnosis and all available treatment options. Choosing us
          means choosing a team that puts your vision and well-being first.
        </p>

        <hr className="my-8 border-gray-300" />

        <h2 className="text-3xl font-bold text-cyan-900 mb-4">
          Types of Cornea Transplants Available at Our Hospital
        </h2>
        <ul className="list-disc list-inside ml-4 text-base text-gray-700 space-y-2 mb-6">
          <li>
            <strong>Penetrating Keratoplasty (PK):</strong> A full-thickness
            transplant where the entire damaged cornea is replaced with a
            healthy donor cornea. This is often used for deep corneal scarring
            and advanced keratoconus.
          </li>
          <li>
            <strong>Deep Anterior Lamellar Keratoplasty (DALK):</strong> A
            partial-thickness transplant that replaces the front layers of the
            cornea while leaving the healthy innermost layer intact. This is
            ideal for conditions like keratoconus and corneal scarring that
            don't affect the deepest layer.
          </li>
          <li>
            <strong>
              Descemet's Stripping Automated Endothelial Keratoplasty (DSAEK):
            </strong>{" "}
            A partial-thickness transplant that replaces only the innermost
            layer of the cornea. This procedure is highly effective for
            conditions like Fuch's dystrophy, where the inner layer is the
            primary issue.
          </li>
          <li>
            <strong>
              Descemet's Membrane Endothelial Keratoplasty (DMEK):
            </strong>{" "}
            A newer, more advanced partial-thickness transplant that uses an
            even thinner layer of donor tissue. DMEK offers faster visual
            recovery and a lower risk of rejection compared to DSAEK.
          </li>
        </ul>

        <hr className="my-8 border-gray-300" />

        <h2 className="text-3xl font-bold text-cyan-900 mb-4">
          Do we have the latest technology &amp; experience to handle complex
          Cornea Problems?
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Absolutely. At Dr. Preeti's Bright Eye Care Hospital, we pride
          ourselves on being at the forefront of ophthalmic technology. We have
          invested in state-of-the-art diagnostic and surgical equipment, which
          allows us to accurately diagnose complex corneal conditions and
          perform intricate procedures with unparalleled precision. Our surgical
          team, led by Dr. Preeti, possesses extensive experience in handling a
          wide range of corneal problems, from routine cases to the most
          challenging and complex situations. We are committed to continuous
          learning and staying updated on the latest advancements in corneal
          surgery to ensure our patients receive the most effective and safest
          treatments available.
        </p>

        <hr className="my-8 border-gray-300" />

        <h2 className="text-3xl font-bold text-cyan-900 mb-4">
          Available Cornea Treatments at Dr. Preeti's Bright Eye Care Hospital
        </h2>
        <ul className="list-disc list-inside ml-4 text-base text-gray-700 space-y-2">
          <li>
            <strong>Corneal Ulcer &amp; Infection Treatment:</strong> Prompt and
            effective treatment for corneal ulcers and infections to prevent
            permanent scarring and vision loss.
          </li>
          <li>
            <strong>Keratoconus Management:</strong> Treatments including
            cross-linking to strengthen the cornea and specialty contact lenses
            to improve vision.
          </li>
          <li>
            <strong>Corneal Transplant Surgery:</strong> Specializing in PK,
            DALK, DSAEK, and DMEK, tailored to patient needs.
          </li>
          <li>
            <strong>Corneal Dystrophy Treatment:</strong> Surgical and medical
            management for conditions like Fuch's dystrophy.
          </li>
          <li>
            <strong>Corneal Injury &amp; Trauma Care:</strong> Expert treatment
            for injuries ranging from abrasions to severe trauma.
          </li>
          <li>
            <strong>Dry Eye Syndrome Management:</strong> Diagnosis and
            treatment plans to improve tear quality and comfort.
          </li>
          <li>
            <strong>Pterygium Excision:</strong> Surgical removal of growths
            that can invade the cornea.
          </li>
          <li>
            <strong>Limbal Stem Cell Transplantation:</strong> Specialized
            treatment for severe corneal surface damage.
          </li>
        </ul>
        <div className="bg-cyan-50 border border-cyan-200 rounded-3xl p-8 text-center my-10 shadow-md">
          <p className="font-bold text-cyan-700 text-lg">
            Through regular exams and a collaborative approach with
            subspecialists, general ophthalmologists help protect and enhance
            vision for people of all ages.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "ContactLensClinic",
    title: "Contact Lens Clinic",
    image: "/unnamed.jpg",
    description:
      "A visit to a contact lens clinic is a comprehensive process aimed at finding the perfect lens for your eyes, ensuring comfort, safety, and optimal vision.",
    link: "/services/contact-lens-clinic",
    content: (
      <>
        <h2 className="text-3xl font-bold text-cyan-900 mb-4">
          What to Expect at a Contact Lens Clinic
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          A visit to a contact lens clinic is a thorough process designed to
          find the perfect lens for your eyes. Here's what you can typically
          expect:
        </p>
        <ul className="list-disc list-inside ml-4 text-base text-gray-700 space-y-2 mb-6">
          <li>
            <strong>Comprehensive Eye Exam:</strong> The appointment begins with
            a full eye exam to check overall eye health and detect any
            conditions like dry eye or allergies that might affect lens wear.
          </li>
          <li>
            <strong>Corneal Measurements:</strong> The doctor measures your
            corneal curvature and pupil size using tools like a keratometer or
            corneal topography to ensure proper lens fit and comfort.
          </li>
          <li>
            <strong>Discussion of Lens Options:</strong> Your lifestyle,
            activities, and vision needs are considered to recommend the best
            lens type for you.
          </li>
          <li>
            <strong>Trial Lenses and Fitting:</strong> You’ll try sample lenses,
            and the fit will be checked under a slit lamp microscope to ensure
            proper movement and vision clarity.
          </li>
          <li>
            <strong>Training and Education:</strong> New wearers receive
            instructions on inserting, removing, and caring for lenses to
            prevent infections and complications.
          </li>
          <li>
            <strong>Follow-Up Appointments:</strong> Scheduled to confirm lens
            comfort, fit, and vision quality.
          </li>
        </ul>

        <hr className="my-8 border-gray-300" />

        <h2 className="text-3xl font-bold text-cyan-900 mb-4">
          Types of Contact Lenses and Conditions They Treat
        </h2>
        <ul className="list-disc list-inside ml-4 text-base text-gray-700 space-y-2 mb-6">
          <li>
            <strong>Soft Lenses:</strong> Made from flexible plastics, these are
            the most common type of lens.
          </li>
          <li>
            <strong>Daily Disposables:</strong> Worn for one day and discarded;
            ideal for occasional wearers or those with allergies.
          </li>
          <li>
            <strong>Monthly/Bi-Weekly Lenses:</strong> Worn for extended periods
            with regular cleaning and disinfection.
          </li>
          <li>
            <strong>Rigid Gas Permeable (RGP) Lenses:</strong> More durable than
            soft lenses and provide sharper vision for certain eye conditions.
          </li>
          <li>
            <strong>Specialty Lenses:</strong> Custom-designed for complex
            cases.
          </li>
          <li>
            <strong>Toric Lenses:</strong> Correct astigmatism caused by
            irregularly shaped corneas.
          </li>
          <li>
            <strong>Multifocal Lenses:</strong> Correct presbyopia, improving
            focus for near and far vision.
          </li>
          <li>
            <strong>Scleral Lenses:</strong> Large RGP lenses ideal for
            keratoconus and severe dry eye.
          </li>
          <li>
            <strong>Prosthetic Lenses:</strong> Improve appearance by masking
            corneal scarring or disfigurements.
          </li>
        </ul>

        <hr className="my-8 border-gray-300" />

        <h2 className="text-3xl font-bold text-cyan-900 mb-4">
          Who Works at a Contact Lens Clinic?
        </h2>
        <ul className="list-disc list-inside ml-4 text-base text-gray-700 space-y-2">
          <li>
            <strong>Optometrists (O.D.):</strong> Perform eye exams, diagnose
            vision problems, prescribe and fit contact lenses, and treat common
            eye diseases.
          </li>
          <li>
            <strong>Ophthalmologists (M.D.):</strong> Eye doctors who can
            perform all optometrist services plus eye surgeries.
          </li>
          <li>
            <strong>Opticians:</strong> Technicians who design, fit, and
            dispense glasses and lenses based on prescriptions.
          </li>
        </ul>

        <div className="bg-cyan-50 border border-cyan-200 rounded-3xl p-8 text-center my-10 shadow-md">
          <p className="font-bold text-cyan-700 text-lg">
            Whether you’re new to contact lenses or upgrading your current ones,
            specialized care ensures you get the safest and clearest vision
            possible.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "MyopiaControlClinic",
    title: "Myopia Control Clinic",
    image: "/MyopiaControlClinic.jpg",
    description:
      "A specialized clinic dedicated to slowing the progression of myopia in children and young adults, reducing long-term vision risks through personalized treatments.",
    link: "/services/myopia-control-clinic",
    content: (
      <>
        <h2 className="text-3xl font-bold text-cyan-900 mb-4">
          What is a Myopia Control Clinic?
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          A myopia control clinic is a specialized eye care facility focused on
          slowing the progression of myopia, or nearsightedness—especially in
          children and young adults. Myopia causes blurry distant vision and is
          a growing global health concern. By actively managing myopia, these
          clinics aim to reduce a person's final prescription and lower their
          risk of developing serious eye conditions like retinal detachment and
          glaucoma later in life.
        </p>

        <hr className="my-8 border-gray-300" />

        <h2 className="text-3xl font-bold text-cyan-900 mb-4">
          Why is Myopia Control Important?
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Myopia isn't just about needing glasses. It is caused by the eyeball
          growing too long, which stretches the retina and other internal eye
          structures. The more the eye grows, the higher the prescription
          becomes, and the greater the risk of serious, vision-threatening
          complications in adulthood. A myopia control clinic provides
          treatments that go beyond simply correcting vision—they target and
          slow this excessive eye growth.
        </p>

        <hr className="my-8 border-gray-300" />

        <h2 className="text-3xl font-bold text-cyan-900 mb-4">
          Myopia Control Treatments and Services
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Myopia control clinics use a range of evidence-based methods to create
          a personalized treatment plan for each patient. A comprehensive
          approach often includes:
        </p>
        <ul className="list-disc list-inside ml-4 text-base text-gray-700 space-y-2 mb-6">
          <li>
            <strong>Specialized Contact Lenses 👁️:</strong> These are not
            standard lenses—they are designed to change how light focuses on the
            retina, signaling the eye to slow its growth.
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
              <li>
                <strong>Orthokeratology (Ortho-K):</strong> Rigid gas permeable
                lenses worn overnight to gently reshape the cornea, providing
                clear vision during the day while slowing myopia progression.
              </li>
              <li>
                <strong>Myopia Control Soft Contact Lenses:</strong> Daily
                disposable lenses that correct central vision and create a
                beneficial "defocus" in peripheral vision to slow eye
                elongation.
              </li>
            </ul>
          </li>
          <li>
            <strong>Atropine Eye Drops 💧:</strong> Low-dose atropine, used once
            a day, relaxes the eye's focusing muscles and has been proven to
            slow myopia progression with minimal side effects. Often used alone
            or in combination with other treatments.
          </li>
          <li>
            <strong>Myopia Control Glasses 👓:</strong> Special spectacle lenses
            with advanced optical designs, such as "lenslets," help control how
            light enters the peripheral retina, slowing eye growth.
          </li>
        </ul>

        <hr className="my-8 border-gray-300" />

        <h2 className="text-3xl font-bold text-cyan-900 mb-4">
          What to Expect at a Myopia Control Clinic
        </h2>
        <ul className="list-disc list-inside ml-4 text-base text-gray-700 space-y-2 mb-6">
          <li>
            <strong>Comprehensive Eye Exam:</strong> Detailed evaluation of
            vision and overall eye health.
          </li>
          <li>
            <strong>Axial Length Measurement:</strong> Specialized testing to
            measure eyeball length—a key metric for tracking myopia progression.
          </li>
          <li>
            <strong>Corneal Topography:</strong> Mapping of corneal shape to aid
            in Ortho-K lens fitting.
          </li>
          <li>
            <strong>Customized Treatment Plan:</strong> Tailored strategy based
            on age, prescription, and lifestyle.
          </li>
          <li>
            <strong>Ongoing Monitoring:</strong> Regular follow-ups to track
            changes and adjust treatment for the best results.
          </li>
        </ul>

        <div className="bg-cyan-50 border border-cyan-200 rounded-3xl p-8 text-center my-10 shadow-md">
          <p className="font-bold text-cyan-700 text-lg">
            Early intervention is key—slowing myopia in childhood helps protect
            vision for a lifetime.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "ProstheticShellClinic",
    title: "Prosthetic Shell Clinic",
    image: "/PPS.jpg",
    description:
      "A specialized clinic providing custom-made ocular prosthetics, specifically scleral shells, to restore a natural eye appearance and boost patient confidence.",
    link: "/services/prosthetic-shell-clinic",
    content: (
      <>
        <h2 className="text-3xl font-bold text-cyan-900 mb-4">
          What is a Prosthetic Shell Clinic?
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          A prosthetic shell clinic is a specialized medical facility that
          creates custom-made ocular prosthetics—specifically scleral shells—for
          patients with a blind or disfigured eye. Unlike a full prosthetic eye,
          which replaces the entire eyeball, a scleral shell is a thin,
          custom-fitted device that fits over an existing eye to restore a
          natural and symmetrical appearance. This can greatly enhance a
          patient's confidence and quality of life.
        </p>

        <hr className="my-8 border-gray-300" />

        <h2 className="text-3xl font-bold text-cyan-900 mb-4">
          What is a Scleral Shell?
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          A scleral shell is a type of ocular prosthesis worn over a blemished
          or disfigured eye. Made from thin, durable, biocompatible acrylic, it
          is meticulously hand-painted to match the patient's healthy eye in
          iris color, detail, and size.
        </p>

        <hr className="my-8 border-gray-300" />

        <h2 className="text-3xl font-bold text-cyan-900 mb-4">
          When is a Prosthetic Shell Required?
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          A scleral shell is ideal for patients who have a disfigured but intact
          eye. Common conditions include:
        </p>
        <ul className="list-disc list-inside ml-4 text-base text-gray-700 space-y-2 mb-6">
          <li>Corneal scarring from injury or infection</li>
          <li>Phthisis bulbi (shrunken or atrophic eye)</li>
          <li>Microphthalmia (abnormally small eye from birth)</li>
          <li>Post-trauma or post-surgical disfigurement</li>
        </ul>
        <p className="text-lg text-gray-700 mb-6">
          In such cases, a scleral shell improves cosmetic appearance without
          requiring invasive surgery.
        </p>

        <hr className="my-8 border-gray-300" />

        <h2 className="text-3xl font-bold text-cyan-900 mb-4">
          The Custom-Fitting Process
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Creating a scleral shell is a precise combination of science and art,
          performed by a specialist called an ocularist:
        </p>
        <ul className="list-disc list-inside ml-4 text-base text-gray-700 space-y-2 mb-6">
          <li>
            <strong>Initial Consultation & Impression:</strong> Examination of
            the affected eye followed by a painless impression to ensure a
            perfect fit.
          </li>
          <li>
            <strong>Fabrication & Wax Fitting:</strong> A trial shell is made
            and adjusted for movement, eyelid support, and comfort.
          </li>
          <li>
            <strong>Painting & Customization:</strong> Hand-painted to match the
            natural eye, including iris color, pupil size, and scleral details.
          </li>
          <li>
            <strong>Final Fitting & Polishing:</strong> Shell is polished for
            smooth comfort and patients are trained in insertion, removal, and
            care.
          </li>
        </ul>

        <hr className="my-8 border-gray-300" />

        <h2 className="text-3xl font-bold text-cyan-900 mb-4">
          Benefits of a Prosthetic Shell
        </h2>
        <ul className="list-disc list-inside ml-4 text-base text-gray-700 space-y-2 mb-6">
          <li>Restores a natural, lifelike eye appearance</li>
          <li>Non-surgical alternative to eye removal</li>
          <li>Improves comfort over scarred corneal surfaces</li>
          <li>Boosts self-confidence and social ease</li>
          <li>Provides eyelid support to correct drooping</li>
        </ul>

        <div className="bg-cyan-50 border border-cyan-200 rounded-3xl p-8 text-center my-10 shadow-md">
          <p className="font-bold text-cyan-700 text-lg">
            A prosthetic shell can restore not just appearance—but also comfort,
            confidence, and quality of life.
          </p>
        </div>
      </>
    ),
  },
];
