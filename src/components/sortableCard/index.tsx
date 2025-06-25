import { useSortable } from "@dnd-kit/sortable";
import { CSS } from '@dnd-kit/utilities';
import Card from "../card";

interface SortableCardPropsTS {
  id: string;
  title: string;
  completed: boolean;
  onRemove: (id: string) => void;
  onToggleComplete: (id: string) => void;
}

export default function SortableCard(p: SortableCardPropsTS) {
    const { attributes, listeners, setNodeRef, transform, transition} = useSortable({id: p.id})

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        width: "100%", 
        maxWidth: "100vw",  
    };

    return(
        <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
            <Card {...p}/>
        </div>
    )
}