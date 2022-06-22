import { CheckCircle, Lock } from 'phosphor-react'
import { isPast } from 'date-fns'

interface LessonProps {
    title: string;
    slug: string;
    availableAt: Date;
    type: 'live' | 'class';
}

export function Lesson(props: LessonProps) {

    const isLessonAvailable = isPast(props.availableAt)

    return (
        <a href="#">
            <span className="text-gray-300">
                {props.availableAt.toString()}
            </span>

            <div className="rounded border border-gray-500 p-4 mt-2">
                <header className="flex items-center justify-between">
                    {isLessonAvailable ? (
                        <span className="text-sm text-blue-500 font-medium flex items-center gap-2">
                            <CheckCircle size={20}/>
                            Content released
                        </span>
                    ) : (
                        <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
                            <Lock size={20}/>
                            Coming soon
                        </span>
                    )}
                    <span className="text-xs rounded py-[0.125rem] px-2 bg-green-300 border-white font-bold">
                        {props.type === 'live' ? 'Live' : 'Practical Class'}
                        </span>
                </header>
                <strong className="text-gray-200 mt-5 block">
                    {props.title}
                </strong>
            </div>
        </a>
    )
}