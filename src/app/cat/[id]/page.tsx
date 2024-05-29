import Image from "next/image";

async function getData(id: string) {
  const response = await fetch(`https://api.thecatapi.com/v1/breeds/${id}`);
  return response.json();
}

export default async function DetailCat({
  params,
}: {
  params: { id: string };
}) {
  let linkImage = "https://cdn2.thecatapi.com/images";
  const cat = await getData(params.id);

  return (
    <div>
      <h1 className="text-6xl font-bold">{cat.name}</h1>
      <Image
        src={`${linkImage}/${cat.reference_image_id}.jpg`}
        alt={cat.name}
        width={800}
        height={200}
      />
      <p>{cat.description}</p>
    </div>
  );
}
