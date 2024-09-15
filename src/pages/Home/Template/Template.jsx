import img1 from "../../../assets/template/inspiration.jpg";
import img2 from "../../../assets/template/j-balla-photography-F57xLufncj8-unsplash.jpg";
import img3 from "../../../assets/template/sarandy-westfall--itLKdE7ojA-unsplash.jpg";
import img4 from "../../../assets/template/national-cancer-institute-JvPmIB4Hnx4-unsplash.jpg";
import img5 from "../../../assets/template/tran-mau-tri-tam-7mfR5n3XozU-unsplash.jpg";
import img6 from "../../../assets/template/valerie-elash-OME1rVKfXyg-unsplash.jpg";
const Template = () => {
  return (
    <div>
      <h1 className="text-center text-4xl font-bold my-12 text-sky-700">
        People's kindness to pets{" "}
      </h1>
      <p className="w-[70%] mx-auto mb-12">
        Being kind to pets is one of the greatest gifts we can offer, not just
        to them but to ourselves. Pets rely on us for love, care, and
        protection, and in return, they give us loyalty, companionship, and joy.
        Whether it’s a gentle pat, a cozy home, or a warm meal, showing kindness
        to animals reflects our compassion.
      </p>
      {/* card---------1 */}
      <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-10">
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img class="rounded-t-lg" src={img1} alt="" />
          </a>
          <div class="p-5">
            {/* <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
            </a> */}
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Being kind to pets is one of the greatest gifts we can offer, not
              just to them but to ourselves. Pets rely on us for love, care, and
              protection, and in return, they give us loyalty, companionship,
              and joy.
            </p>
          </div>
        </div>
        {/* card---------2 */}
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img class="rounded-t-lg" src={img2} alt="" />
          </a>
          <div class="p-5">
            {/* <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
            </a> */}
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              "Pets are more than just animals; they are loyal companions who
              enrich our lives in countless ways. When we show kindness to pets,
              we nurture the bond between humans and animals, creating a sense
              of trust and happiness that they thrive on.
            </p>
          </div>
        </div>
        {/* card---------3 */}
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img class="rounded-t-lg" src={img3} alt="" />
          </a>
          <div class="p-5">
            {/* <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
            </a> */}
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Simple acts of care—like offering a comfortable space, feeding
              them nutritious meals, or taking time to play—mean the world to
              them. Our kindness teaches them that they are loved and safe, and
              in return, they offer unwavering loyalty, love, and joy.
            </p>
          </div>
        </div>
        {/* card---------4 */}
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img class="rounded-t-lg" src={img4} alt="" />
          </a>
          <div class="p-5">
            {/* <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
            </a> */}
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Kindness to pets is more than just providing food and shelter—it's
              about understanding their needs, emotions, and giving them the
              attention they crave. Pets bring unconditional love, joy, and
              comfort into our lives, and they deserve the same in return.
            </p>
          </div>
        </div>
        {/* card---------5 */}
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img class="rounded-t-lg" src={img5} alt="" />
          </a>
          <div class="p-5">
            {/* <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
            </a> */}
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Whether it’s a wagging tail, a gentle purr, or a playful chirp,
              pets express their gratitude in ways that touch our hearts. By
              treating them with patience, respect, and affection, we create a
              bond that lasts a lifetime.
            </p>
          </div>
        </div>
        {/* card---------6 */}
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img class="rounded-t-lg" src={img6} alt="" />
          </a>
          <div class="p-5">
            {/* <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
            </a> */}
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Pets bring unconditional love, joy, and comfort into our lives,
              and they deserve the same in return. Whether it’s a wagging tail,
              a gentle purr, or a playful chirp, pets express their gratitude in
              ways that touch our hearts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template;
