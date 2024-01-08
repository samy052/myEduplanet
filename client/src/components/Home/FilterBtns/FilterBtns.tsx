const FilterBtns = () => {
    return (
      <div className="filter-container">
        <h1>Browse by course</h1>
        <div className="filter-card-container">
          {filterCardData.map((i) => (
            <div
              className="filter-card"
              style={{
                backgroundImage: `url(${i.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
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
      img: "img",
    },
    {
      id: 2,
      title: "Commerce",
      img: "img",
    },
    {
      id: 3,
      title: "Managaement",
      img: "img",
    },
    {
      id: 4,
      title: "Medical",
      img: "img",
    },
    {
      id: 5,
      title: "Science",
      img: "img",
    },
    {
      id: 6,
      title: "Hotel Managaement",
      img: "https://img.freepik.com/premium-vector/hotel-design_24877-45379.jpg?uid=R132639883&semt=ais",
    },
    {
      id: 7,
      title: "Pharmacy",
      img: "img",
    },
    {
      id: 8,
      title: "Dental",
      img: "img",
    },
    {
      id: 9,
      title: "Law",
      img: "img",
    },
    {
      id: 10,
      title: "Design",
      img: "img",
    },
    {
      id: 11,
      title: "Nursing",
      img: "img",
    },
    {
      id: 12,
      title: "Art",
      img: "img",
    },
  ];