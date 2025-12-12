import ClassCard, { ClassCardList, ClassCardItem } from "@/components/ClassCard";
import { executeQuery } from "@/lib/graphqlClient"
import { GET_DATA } from "@/lib/queries";

// types for the classes


export default async function Home() {
  const { classes } = await executeQuery<ClassCardList>(GET_DATA);
  return (
    <div>
      <div className="p-4 flex gap-2 flex-col">
        <h1 className="font-black text-2xl">My top Classes</h1>
        <ul className="grid grid-flow-col grid-rows-2 gap-2">
          {classes?.map((classItem) => (
            <li key={classItem.id}>
              <ClassCard {...classItem} />
            </li>
          ))
          }
        </ul>
      </div>
    </div>
  );
}
