import { LocationUser04Icon } from "hugeicons-react";

function App() {
  return (
    <>
      <header>
        <div className="wrapper flex items-center justify-between h-[80px] ">
          <img src="/homestay-frontend.svg" alt="logo" />
          <nav>
            <ul className="flex gap-10 items-center">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Tours</a>
              </li>
              <li>
                <a>Events</a>
              </li>
              <li>
                <a>Login</a>
              </li>
              <button className="green-button">
                <a href="">Sign up</a>
              </button>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <section className="hero">
          <div className="flex flex-col items-center justify-center max-w-lg text-center gap-4">
            <h1 className="text-5xl font-bold leading-[1.2]">
              Experience Africa Like Never Before
            </h1>
            <p className="text-lg">
              Discover the beauty of Africa through authentic homestays with
              local hosts. Immerse yourself in vibrant cultures and create
              unforgettable memories.
            </p>
            <div className="flex gap-4">
              <button className="green-button">
                <a href="">Explore Tours</a>
              </button>
              <button className="inverted-button">
                <a href="">How It Works</a>
              </button>
            </div>
          </div>
        </section>
        <section className="second  bg-red-100">
          <div className="wrapper">
            <h3 className="text-2xl text-greenish font-bold leading-[1.2] text-center mb-3">
              Experience Africa Like Never Before
            </h3>
            <p className=" max-w-2xl text-center mx-auto">
              Discover the beauty of Africa through authentic homestays with
              local hosts. Immerse yourself in vibrant cultures and create
              unforgettable memories.
            </p>
            <div className="grid mt-7">
              <div className="flex flex-col gap-2">
                <img
                  src="/Rectangle 5.jpg"
                  alt=""
                  className="rounded-lg object-cover w-full"
                />
                <h3 className="text-lg font-medium">Hello</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nobis officia, earum porro, modi hic laudantium blanditiis rem
                  odio eaque, placeat tempore. Eveniet quaerat vel aliquam
                  accusamus aperiam cumque possimus deserunt?
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <img
                  src="/Rectangle 6.jpg"
                  alt=""
                  className="rounded-lg object-cover w-full"
                />
                <h3 className="text-lg font-medium">Hello</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nobis officia, earum porro, modi hic laudantium blanditiis rem
                  odio eaque, placeat tempore. Eveniet quaerat vel aliquam
                  accusamus aperiam cumque possimus deserunt?
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <img
                  src="/Rectangle 7.jpg"
                  alt=""
                  className="rounded-lg object-cover w-full"
                />
                <h3 className="text-lg font-medium">Hello</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nobis officia, earum porro, modi hic laudantium blanditiis rem
                  odio eaque, placeat tempore. Eveniet quaerat vel aliquam
                  accusamus aperiam cumque possimus deserunt?
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="second  bg-red-100">
          <div className="wrapper">
            <h3 className="text-2xl text-greenish font-bold leading-[1.2] text-center mb-3">
              Benefits
            </h3>
            <p className=" max-w-2xl text-center mx-auto">
              Discover the advantages of Homestay Africa
            </p>
            <div className="grid mt-7">
              <div className="flex flex-col gap-2">
                <LocationUser04Icon size={40} />
                <h3 className="text-lg font-medium">Hello</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nobis officia, earum porro, modi hic laudantium blanditiis rem
                  odio eaque, placeat tempore. Eveniet quaerat vel aliquam
                  accusamus aperiam cumque possimus deserunt?
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <LocationUser04Icon size={40} />
                <h3 className="text-lg font-medium">Hello</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nobis officia, earum porro, modi hic laudantium blanditiis rem
                  odio eaque, placeat tempore. Eveniet quaerat vel aliquam
                  accusamus aperiam cumque possimus deserunt?
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <LocationUser04Icon size={40} />
                <h3 className="text-lg font-medium">Hello</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nobis officia, earum porro, modi hic laudantium blanditiis rem
                  odio eaque, placeat tempore. Eveniet quaerat vel aliquam
                  accusamus aperiam cumque possimus deserunt?
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <LocationUser04Icon size={40} />
                <h3 className="text-lg font-medium">Hello</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nobis officia, earum porro, modi hic laudantium blanditiis rem
                  odio eaque, placeat tempore. Eveniet quaerat vel aliquam
                  accusamus aperiam cumque possimus deserunt?
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <LocationUser04Icon size={40} />
                <h3 className="text-lg font-medium">Hello</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nobis officia, earum porro, modi hic laudantium blanditiis rem
                  odio eaque, placeat tempore. Eveniet quaerat vel aliquam
                  accusamus aperiam cumque possimus deserunt?
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <LocationUser04Icon size={40} />
                <h3 className="text-lg font-medium">Hello</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nobis officia, earum porro, modi hic laudantium blanditiis rem
                  odio eaque, placeat tempore. Eveniet quaerat vel aliquam
                  accusamus aperiam cumque possimus deserunt?
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="px-4">
          <div className="img-content max-w-7xl mx-auto flex gap-1 flex-wrap  basis-0">
            <h3>Start Your African Adventure Today</h3>
            <div className="flex flex-col gap-3">
              <p>
                Discover the beauty of Africa through authentic homestays that
                connect you with local hosts. Book your unforgettable experience
                now and immerse yourself in vibrant cultures.
              </p>
              <button className="green-button">Explore Tours</button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
