import NewTask from "@/components/NewTask";
import Task from "@/components/Task";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative">
      <NewTask />
      <Task />
    </div>
  );
}
