import { notFound } from "next/navigation";

const MovieDetailsPage = ({ params }: { params: { id: string } }) => {
  if (!params.id) {
    return notFound();
  }

  return <div>movie id: {params.id}</div>;
};

export default MovieDetailsPage;
