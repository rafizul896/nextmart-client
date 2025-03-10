import { getCurrentUser } from "@/services/AuthService";

const HomePage = async () => {
  const user = await getCurrentUser();
  console.log(user);
  
  return <div></div>;
};

export default HomePage;
