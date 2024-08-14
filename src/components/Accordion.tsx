import { DummyData, Group } from "@/services/usos/getGroups";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

type CombinedProps = {
  index: number;
  onClick: (index: number, group: Group) => void;
} & DummyData;

export default function GroupsAccordion({ index, onClick, ...props }: CombinedProps) {
  //   return (
  //     <div>
  //       <h2>{index}</h2>
  //       <h1>{props.registration.name}</h1>
  //       <h2>
  //         {props.courses.map((course) => {
  //           return (
  //             <div key={course.course.id}>
  //               <div key={course.course.id}>{course.course.name}</div>
  //               {course.groups.map((group) => {
  //                 return (
  //                   <div key={group.name}>
  //                     <input type="checkbox" onClick={() => onClick(index, group)} />
  //                     {group.name}
  //                   </div>
  //                 );
  //               })}
  //             </div>
  //           );
  //         })}
  //       </h2>
  //     </div>
  //   );
  return (
    <div className="max-w-96">
      <h1 className="text-2xl font-semibold p-4 ">Wybierz odpowiednią turę:</h1>
      <Accordion type="single" collapsible className="">
        <AccordionItem value="item-1">
          <AccordionTrigger className="px-4">
            <div className="flex items-center gap-4">
              <div className="w-[50px] h-[50px] rounded-[50px] bg-[#9DC2FA] items-center flex justify-center">
                {index + 1}
              </div>
              {props.registration.name}
            </div>
          </AccordionTrigger>
          <AccordionContent>
            {props.courses.map((course) => {
              return (
                <div key={course.course.id}>
                  {course.groups.map((group) => {
                    return (
                      <div
                        key={group.name}
                        className="grid grid-cols-[1fr_4fr_1fr] gap-4 justify-between break-all items-center py-2 text-base hover:bg-[#49454F] hover:cursor-pointer p-4 "
                      >
                        <div className="w-[50px] h-[50px] rounded-[50px] bg-[#D9E8FF] items-center flex justify-center">
                          {group.type.slice(0, 1).toUpperCase()}
                        </div>
                        <div>{group.name}</div>
                        <input
                          type="checkbox"
                          onClick={() => onClick(index, group)}
                          className="w-6 h-6 justify-self-end"
                        />
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
//cos nie dziala checked i group.isChecked - TODO
