import { client } from '../lib/client' 

import { Development } from "../components";

export default function Home({ developments }) {
  return (
    <div>
      {developments.map((development, index) => (
        <Development key={index} development={development} reverse={index % 2 != 0} />
      ))}
    </div>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "development"] | order(_createdAt asc)'
  const developments = await client.fetch(query)

  return {
    props: { developments }
  }
}