import Image from "next/image";
import Link from "next/link";

export default function Article(props) {
  return (
    <li className="list-none">
      <article>
        <figure className="relative">
          <Image
            src={props.src}
            width={375}
            height={300}
            alt={props.alt}
            className="rounded-l-[2.5rem] rounded-tr-[2.5rem]"
          />
          <figcaption className="absolute bottom-0 left-0 w-full font-semibold bg-[#E1A1E9] bg-opacity-60 p-6 rounded-tr-[2.5rem] rounded-bl-[2.5rem]">
            <Link href={`/activities/details/${props.linkId}`}> 
              <h2 className="pl-3">{props.name}</h2>
            </Link>
            <p className="pl-3">Alder: {props.age}</p>
          </figcaption>
        </figure>
      </article>
    </li>
  );
}
