import { Card, CardHeader, Divider, CardBody, CardFooter, Image, Link } from "@nextui-org/react";
// import Image from "next/image";
// import Link from "next/link";

export default function JoinMailingListForm() {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4">
      <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md">NextUI</p>
          <p className="text-small text-default-500">nextui.org</p>
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
        <p>Make beautiful websites regardless of your design experience.</p>
      </CardBody>
      <Divider/>
      <CardFooter>
        <Link
           showAnchorIcon
          href="https://github.com/nextui-org/nextui"
        >
          Visit source code on GitHub.
        </Link>
      </CardFooter>
    </Card>
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <Image
            alt="6ixCollective logo"
            className="h-48 w-full object-cover md:w-48"
            height="480"
            src="/placeholder.svg"
            style={{
              aspectRatio: "480/480",
              objectFit: "cover",
            }}
            width="480"
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Join the 6ixCollective</div>
          <h2 className="block mt-1 text-lg leading-tight font-medium text-black">Subscribe to our mailing list</h2>
          <p className="mt-2 text-gray-500">Stay up to date with our latest news and events.</p>
          <div className="mt-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name">Name</label>
                <input id="name" placeholder="Enter your name" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email">Email</label>
                <input id="email" placeholder="Enter your email" type="email" />
              </div>
              <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

