import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
  Checkbox,
} from "@material-tailwind/react";
import {DocumentDuplicateIcon} from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard } from "@/widgets/cards";
import { featuresData } from "@/data";
import portfolio from "@/pages/portfolio.jsx";




export function About() {
  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('/img/main-back-img.webp')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black"
              >
                채우다 인테리어
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
                고객의 생각을 공간에 담는 채우다 인테리어입니다.
              </Typography>
            </div>
          </div>
        </div>
      </div>

      <section className="-mt-32 bg-white px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* TODO::Icon Reference 찾기 ==> Refer : https://heroicons.dev/ */}
            {featuresData.map(({ color, title, icon, description }) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                icon={React.createElement(icon, {
                  className: "w-5 h-5 text-white",
                })}
                description={description}
              />
            ))}
          </div>

          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-gray-900 p-2 text-center shadow-lg">
                <DocumentDuplicateIcon className="h-8 w-8 text-white " />
              </div>
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                Portfolio
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
                한번의 시공으로 영원히 가는 죽음의 철옹성을 만들어드립니다.
                <br />
                <br />
                다년간의 경험을 가진 베테랑 기술자들이 머리를 맞대 기술을 발휘합니다.
              </Typography>
              <Button onClick={portfolio} variant="filled" >go to portfolio</Button>
            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <Card className="shadow-lg border shadow-gray-500/10 rounded-lg">
                <CardHeader floated={false} className="relative h-56">
                  <img
                    alt="Card Image"
                    src="/img/portfolio-thumbnail.jpg"
                    className="h-full w-full"
                  />
                </CardHeader>
                <CardBody>
                  <Typography variant="small" color="blue-gray" className="font-normal">Enterprise</Typography>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-3 mt-2 font-bold"
                  >
                    대표 인테리어 ex: 분당수지유타워
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                    대표 인테리어 설명 ex:
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis delectus doloremque earum
                    fuga ipsam iste nesciunt, nisi officiis quos reiciendis repellendus suscipit unde voluptatibus!
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>


      <section className="relative bg-white py-24 px-4">
        <div className="container mx-auto">
          <PageTitle section="text" heading="신뢰">
            고객과의 약속을 최우선합니다.
            <br/>
            lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </PageTitle>

          <br/><br/><br/>

          <PageTitle section="Contact Us" heading="Want to work with us?">
            Complete this form and we will get back to you in 24 hours.
          </PageTitle>
          <form className="mx-auto w-full mt-12 lg:w-5/12">
            <div className="mb-8 flex gap-8">
              <Input variant="outlined" size="lg" label="Full Name" />
              <Input variant="outlined" size="lg" label="Email Address" />
            </div>
            <Textarea variant="outlined" size="lg" label="Message" rows={8} />
            <Checkbox
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                >
                  I agree the
                  <a
                    href="#"
                    className="font-medium transition-colors hover:text-gray-900"
                  >
                    &nbsp;Terms and Conditions
                  </a>
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
            />
            <Button variant="gradient" size="lg" className="mt-8" fullWidth>
              Send Message
            </Button>
          </form>
        </div>
      </section>

      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}

export default About;
