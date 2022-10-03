import Development from "../components/Development";

const developments = [
  {
    id: 1,
    name: "Gwynfaen",
    location: "Newport, NP10 2DD",
    minBeds: 1,
    maxBeds: 5,
    imagePath: "/images/gwynfaen/main.jpg"
  },
  {
    id: 1,
    name: "Woodland Grove",
    location: "Newport, NP10 2DD",
    minBeds: 1,
    maxBeds: 3,
    imagePath: "/images/woodlandgrove/main.jpg"
  },
  {
    id: 1,
    name: "Development 3",
    location: "Newport, NP10 2DD",
    minBeds: 1,
    maxBeds: 4,
    imagePath: "/images/gwynfaen/4.jpg"
  }
]

export default function Home() {
  return (
    <div>
      {developments.map((d, index) => (
        <Development key={index} development={d} reverse={index % 2 != 0} />
      ))}
    </div>
  )
}
