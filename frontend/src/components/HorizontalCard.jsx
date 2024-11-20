import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

export function HorizontalCard({ image, title, subtitle, description, link }) {
  return (
    <Card className="w-full max-w-[48rem] min-h-[30rem] flex-row bg-[#990011] shadow-2xl">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-2/5 shrink-0 rounded-r-none"
      >
        <img
          src={image}
          alt="card-image"
          className="h-full w-full object-cover lg:object-fill"
        />
      </CardHeader>
      <CardBody className="items-center justify-center flex flex-col">
        <Typography variant="h6" className="mb-4 uppercase text-2xl text-gray-50">
          {subtitle}
        </Typography>
        <Typography variant="h4" color="white" className="my-9 text-center md:text-start text-2xl md:text-3xl">
          {title}
        </Typography>
        <Typography className="mb-8 font-medium text-gray-50 text-center tracking-wide">
          {description}
        </Typography>
        {/* <a href={link} className="inline-block"></a> */}
      </CardBody>
    </Card>
  );
}
