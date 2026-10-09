import { useState } from "react";
import "./PhotoCard.css";

// "accusamus beatae ad" -> "Accusamus beatae ad"
const capitalize = (text = "") => text.charAt(0).toUpperCase() + text.slice(1);

export default function PhotoCard({ photo }) {
  const { albumId, id, title, url, thumbnailUrl } = photo;
  const [loaded, setLoaded] = useState(false);

  return (
    <article className="pc">
      <a
        className="pc-media"
        href={url}
        target="_blank"
        rel="noreferrer"
        aria-label={`Open full size photo: ${title}`}
        style={{ backgroundImage: `url(${thumbnailUrl})` }}
      >
        <img
          className={`pc-img${loaded ? " is-loaded" : ""}`}
          src={url}
          alt={title}
          loading="lazy"
          onLoad={() => setLoaded(true)}
        />
        <span className="pc-badge">Album {albumId}</span>
      </a>

      <div className="pc-body">
        <h3 className="pc-title">{capitalize(title)}</h3>
        <p className="pc-meta">Photo #{id}</p>
      </div>
    </article>
  );
}

/* Usage
import PhotoCard from "./PhotoCard";

const photo = {
  albumId: 1,
  id: 1,
  title: "accusamus beatae ad facilis cum similique qui sunt",
  url: "https://picsum.photos/seed/1/600",
  thumbnailUrl: "https://picsum.photos/seed/1/150",
};

<PhotoCard photo={photo} />

// Grid of photos:
<div className="pc-grid">
  {photos.map((p) => <PhotoCard key={p.id} photo={p} />)}
</div>
*/