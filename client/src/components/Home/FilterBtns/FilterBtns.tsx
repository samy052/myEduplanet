import engineering from "../../../../assets/img/engineering.png";
import medical from "../../../../assets/img/medical.png";
import commerce from "../../../../assets/img/commerce.png";
import design from "../../../../assets/img/design.png";
import management from "../../../../assets/img/management.png";
import nursing from "../../../../assets/img/nursing.png";
import art from "../../../../assets/img/art.png";
import pharmacy from "../../../../assets/img/pharmacy.png";
import hotelManagement from "../../../../assets/img/hotelManagement.png";
import science from "../../../../assets/img/science.png";
import law from "../../../../assets/img/law.png";
import dental from "../../../../assets/img/dental.png";
const FilterBtns = () => {
  return (
    <div className="filter-container">
      <h1>Browse by course</h1>
      <div className="filter-card-container">
        {filterCardData.map((i) => (
          <div className="filter-card">
            <div className="img-div">
              <img src={i.img} alt="icon" />
            </div>
            <h3 key={i.id}>{i.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterBtns;

const filterCardData = [
  {
    id: 1,
    title: "Engineering",
    img: engineering,
  },
  {
    id: 2,
    title: "Commerce",
    img: commerce,
  },
  {
    id: 3,
    title: "Managaement",
    img: management,
  },
  {
    id: 4,
    title: "Medical",
    img: medical,
  },
  {
    id: 5,
    title: "Science",
    img: science,
  },
  {
    id: 6,
    title: "Hotel",
    img: hotelManagement,
  },
  {
    id: 7,
    title: "Pharmacy",
    img: pharmacy,
  },
  {
    id: 8,
    title: "Dental",
    img: dental,
  },
  {
    id: 9,
    title: "Law",
    img: law,
  },
  {
    id: 10,
    title: "Design",
    img: design,
  },
  {
    id: 11,
    title: "Nursing",
    img: nursing,
  },
  {
    id: 12,
    title: "Art",
    img: art,
  },
];