import { getCitiesInfo } from "@/entities";
import { CityCard } from "@/features/cities";
import { Row } from "antd";

async function CitiesPage() {
  const data = await getCitiesInfo();

  return (
    <Row gutter={[16, 16]}>
      {data.map((city) => (
        <CityCard key={city.id} cityInfo={city} />
      ))}
    </Row>
  );
}

export default CitiesPage;
