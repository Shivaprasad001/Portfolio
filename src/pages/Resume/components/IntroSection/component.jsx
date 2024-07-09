import Phone from "../../../../assets/icons/Phone.svg";
import Email from "../../../../assets/icons/Message.svg";
import LocationIcon from "../../../../assets/icons/Pin.svg";

export default function IntroSection(props) {
  return (
    <div className="intro-section-wrapper">
      <h1 className="name">{props.name}</h1>
      <h3 className="designation">{props.designation}</h3>
      <div className="contact-details">
        <span className="item">
          <img src={Phone} alt="Phone Icon" />
          <a href={`tel: ${props.phone}`}>{props.phone}</a>
        </span>
        <span className="item">
          <img src={Email} alt="Email Icon" />
          <a href={`mailto: ${props.email}`}>{props.email}</a>
        </span>
        <span className="item">
          <img src={LocationIcon} alt="Location Icon" />
          <a href={`mailto: ${props.location}`}>{props.location}</a>
        </span>
      </div>
    </div>
  );
}
