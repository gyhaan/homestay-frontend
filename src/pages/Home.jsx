import {
  AccountSetting03Icon,
  Agreement02Icon,
  DiscoverCircleIcon,
  InstagramIcon,
  Linkedin02Icon,
  LocationUser04Icon,
  SafeIcon,
  TiktokIcon,
  WalletDone02Icon,
  YoutubeIcon,
} from "hugeicons-react";

function Home() {
  return (
    <>
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
        <section className="second  ">
          <div className="wrapper">
            <h3 className="max-w-96 text-2xl text-greenish font-bold leading-[1.2] text-center mb-3 mx-auto">
              Discover the Simple Steps to Book Your Perfect African Homestay
            </h3>
            <p className=" max-w-2xl text-center mx-auto">
              At Homestay Africa, we simplify booking authentic homestays,
              allowing you to immerse in Africa's rich culture and vibrant
              communities.
            </p>
            <div className="grid mt-7">
              <div className="flex flex-col gap-2">
                <img
                  src="/Rectangle 5.jpg"
                  alt=""
                  className="rounded-lg object-cover w-full"
                />
                <h3 className="text-lg font-medium">Browse Unique Stays</h3>
                <p>
                  Explore a variety of homestays across Africa, from cozy
                  village homes to urban retreats. Filter by your preferences,
                  location, and budget.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <img
                  src="/Rectangle 6.jpg"
                  alt=""
                  className="rounded-lg object-cover w-full"
                />
                <h3 className="text-lg font-medium">
                  Choose Your Perfect Host
                </h3>
                <p>
                  Each of our vetted hosts offer a unique experience. Read
                  reviews, check out their profiles, and choose the one that
                  resonates with you.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <img
                  src="/Rectangle 7.jpg"
                  alt=""
                  className="rounded-lg object-cover w-full"
                />
                <h3 className="text-lg font-medium">Book with Ease</h3>
                <p>
                  Once you've found your ideal stay, booking is simple and
                  secure. Just a few clicks, and you're set for your African
                  adventure!
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="second  ">
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
                <h3 className="text-lg font-medium">
                  Authentic Cultural Experience
                </h3>
                <p>
                  Stay with local hosts and immerse yourself in Africa's diverse
                  cultures, traditions, and way of life.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <Agreement02Icon size={40} />
                <h3 className="text-lg font-medium">
                  Support Local Communities
                </h3>
                <p>
                  Your stay directly benefits local families and communities,
                  promoting sustainable tourism.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <WalletDone02Icon size={40} />
                <h3 className="text-lg font-medium">
                  Affordable Accommodation
                </h3>
                <p>
                  Experience unique stays at budget-friendly prices, with
                  options that suit all travel styles.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <AccountSetting03Icon size={40} />
                <h3 className="text-lg font-medium">Personalized Service</h3>
                <p>
                  Enjoy the warmth of local hospitality with personalized tips,
                  guided tours, and home-cooked meals.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <SafeIcon size={40} />
                <h3 className="text-lg font-medium">Safe and Secure Stays</h3>
                <p>
                  All hosts are verified, providing a safe and comfortable
                  environment for travelers.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <DiscoverCircleIcon size={40} />
                <h3 className="text-lg font-medium">Discover Hidden Gems</h3>
                <p>
                  Explore off-the-beaten-path locations with insider knowledge
                  from your local host.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="px-4">
          <div className="img-content p-10 max-w-7xl mx-auto flex justify-between items-center gap-x-2 gap-y-4  flex-wrap ">
            <h3 className="text-3xl max-w-80 w-fit font-bold">
              Start Your African Adventure Today
            </h3>
            <div className="flex flex-col gap-3 max-w-xl">
              <p>
                Discover the beauty of Africa through authentic homestays that
                connect you with local hosts. Book your unforgettable experience
                now and immerse yourself in vibrant cultures.
              </p>
              <button className="green-button w-fit">Explore Tours</button>
            </div>
          </div>
        </section>
        <section className="second  ">
          <div className="wrapper">
            <h3 className="text-2xl text-greenish font-bold leading-[1.2] text-center mb-3">
              FAQ
            </h3>
            <p className=" max-w-2xl text-center mx-auto">
              Frequently Asked Questions
            </p>
            <div className="grid mt-7">
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-medium">
                  How do I book a homestay?
                </h3>
                <p>
                  You can easily book a homestay through our platform by
                  searching for your desired location, selecting a host, and
                  following the simple booking steps.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-medium">Are homestays safe?</h3>
                <p>
                  Yes! We verify all hosts to ensure a safe and secure stay for
                  our travelers.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-medium">
                  How do I contact my host?
                </h3>
                <p>
                  Once your booking is confirmed, you will receive the host’s
                  contact information for easy communication.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-medium">
                  What is included in the homestay?
                </h3>
                <p>
                  Each homestay varies, but many include meals, guided tours,
                  and personalized experiences provided by your host.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-medium">
                  How do I know where to stay?
                </h3>
                <p>
                  The host is required to pick you up from an agreed upon
                  rendezvous point.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="wrapper">
          <div className=" mx-auto px-10 border-2 h-60 min-h-fit border-greenish  py-7 flex flex-wrap gap-10">
            <div>
              <img src="/homestay-frontend.svg" alt="logo" />
              <p className="font-bold mt-2">
                ‘Experience Africa, Live Like a Local’
              </p>
            </div>
            <nav>
              <p className="font-bold text-greenish mb-2">Quick Links</p>
              <ul className="flex flex-col gap-1">
                <li>
                  <a href="">Get Started</a>
                </li>
                <li>
                  <a href="">Tours</a>
                </li>
                <li>
                  <a href="">Events</a>
                </li>
              </ul>
            </nav>
            <div>
              <p className="font-bold text-greenish mb-2">Contact</p>
              <p>Tel: +250785685777</p>
              <p>Email: homestay@email.io</p>
              <div className="flex gap-4 mt-3 items-center">
                <InstagramIcon size={32} />
                <Linkedin02Icon size={32} />
                <TiktokIcon size={32} />
                <YoutubeIcon size={32} />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Home;
