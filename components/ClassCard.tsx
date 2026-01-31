import Image from 'next/image';

function ClassCard({ coverImage, totalStudents, title, teacher, duration }: ClassCardItem) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <Image className="w-full" height={150} width={272} src={coverImage} alt="" />
      <div className="px-4 py-4 h-[161px] w-max-[272px] flex flex-col justify-between">
        <div>
          <h2 className="text-black font-normal">{teacher.name}</h2>
          <p className="text-black font-semibold">
            {title}
          </p>
        </div>
        <div className="flex">
          <div className="flex mr-2"><Image height={20} width={20} src="/assets/students.svg" alt="" /> {totalStudentFormat(totalStudents)}</div>
          <div className="flex"><Image height={20} width={20} src="/assets/duration.svg" alt="" /> {duration}</div>
        </div>
      </div>
    </div>)
}

export default ClassCard;

const totalStudentFormat = (total: number): string => {
  const totalText = String(total);

  if (totalText.length > 3) {
    return `${totalText[0]}.${totalText[1]}k`
  }
  return totalText;
}

export type ClassCardItem = {
  coverImage: string
  duration: string
  id: string
  title: string
  totalStudents: number
  teacher: {
    name: string
  }
}

export type ClassCardList = {
  classes: ClassCardItem[]
}