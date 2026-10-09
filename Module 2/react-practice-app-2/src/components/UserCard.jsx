import "./UserCard.css";

const Icon = ({ children }) => (
  <svg
    className="uc-icon"
    viewBox="0 0 24 24"
    width="18"
    height="18"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
);

const getInitials = (name = "") =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("");

export default function UserCard({ user, selectedUsers, setSelectedUsers }) {
  const { id, name, username, email, phone, website, address, company } = user;

  // "1-770-736-8031 x56442" -> dialable number
  const dialNumber = phone.split(/\s*x/i)[0].replace(/[^\d+]/g, "");
  const mapUrl = `https://www.openstreetmap.org/?mlat=${address.geo.lat}&mlon=${address.geo.lng}#map=10/${address.geo.lat}/${address.geo.lng}`;

  const handleUserClick = () => {
        setSelectedUsers([...selectedUsers, user]);
    }

  return (
    <article className="uc" style={{ "--uc-hue": (id * 47) % 360 }} onClick={handleUserClick}>
      <header className="uc-header">
        <div className="uc-avatar" aria-hidden="true">
          {getInitials(name)}
        </div>
        <div>
          <h2 className="uc-name">{name}</h2>
          <p className="uc-username">@{username}</p>
        </div>
      </header>

      <section className="uc-company">
        <p className="uc-company-name">{company.name}</p>
        <p className="uc-company-line">{company.catchPhrase}</p>
        <p className="uc-company-bs">{company.bs}</p>
      </section>

      <ul className="uc-contacts">
        <li>
          <a href={`mailto:${email}`}>
            <Icon>
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m3 7 9 6 9-6" />
            </Icon>
            <span>{email}</span>
          </a>
        </li>
        <li>
          <a href={`tel:${dialNumber}`}>
            <Icon>
              <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
            </Icon>
            <span>{phone}</span>
          </a>
        </li>
        <li>
          <a href={`https://${website}`} target="_blank" rel="noreferrer">
            <Icon>
              <circle cx="12" cy="12" r="9" />
              <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
            </Icon>
            <span>{website}</span>
          </a>
        </li>
      </ul>

      <footer className="uc-address">
        <Icon>
          <path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11Z" />
          <circle cx="12" cy="10" r="2.5" />
        </Icon>
        <address>
          {address.suite}, {address.street}
          <br />
          {address.city} {address.zipcode}
        </address>
        <a className="uc-map" href={mapUrl} target="_blank" rel="noreferrer">
          View on map
        </a>
      </footer>
    </article>
  );
}

/* Usage
import UserCard from "./UserCard";

const user = { id: 1, name: "Leanne Graham", ... };

<UserCard user={user} />
*/