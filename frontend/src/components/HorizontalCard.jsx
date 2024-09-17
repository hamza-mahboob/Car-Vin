import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

export function HorizontalCard({ image, title, subtitle, description, link }) {
  return (
    <Card className="w-full max-w-[48rem] flex-row bg-[#393f4d] shadow-2xl">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-2/5 shrink-0 rounded-r-none"
      >
        <img
          src={image}
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody className="items-center justify-center flex flex-col">
        <Typography variant="h6" className="mb-4 uppercase text-2xl text-gray-500">
          {subtitle}
        </Typography>
        <Typography variant="h4" color="white" className="my-9 text-center md:text-start text-2xl md:text-4xl">
          {title}
        </Typography>
        <Typography className="mb-8 font-normal text-gray-500 text-center">
          {description}
        </Typography>
        <a href={link} className="inline-block">

        </a>
      </CardBody>
    </Card>
  );
}
