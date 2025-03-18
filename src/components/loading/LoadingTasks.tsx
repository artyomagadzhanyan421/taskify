import Skeleton from 'react-loading-skeleton';
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import 'react-loading-skeleton/dist/skeleton.css';

function LoadingTasks() {
    const lightMode = useSelector((state: RootState) => state.light.light);

    return (
        <div className='LoadingTasks'>
            <div className="taskGrid">
                {Array.from({ length: 5 }).map((_, index) => (
                    <div className={lightMode ? "task lightTask" : "task"} key={index}>
                        <Skeleton height={32.2} borderRadius={6} baseColor={lightMode ? "#E4E4E7" : "#3F3F46"} highlightColor={lightMode ? "#D4D4D8" : "#52525B"} />
                        <Skeleton height={32.2} width={152.2} borderRadius={6} baseColor={lightMode ? "#E4E4E7" : "#3F3F46"} highlightColor={lightMode ? "#D4D4D8" : "#52525B"} />
                        <Skeleton height={30} width={232} borderRadius={6} baseColor={lightMode ? "#E4E4E7" : "#3F3F46"} highlightColor={lightMode ? "#D4D4D8" : "#52525B"} style={{ marginTop: 18, marginBottom: 20 }} />
                        <Skeleton height={20} count={4} borderRadius={3} baseColor={lightMode ? "#E4E4E7" : "#3F3F46"} highlightColor={lightMode ? "#D4D4D8" : "#52525B"} />
                        <div className="functions" style={{ marginTop: 20 }}>
                            <Skeleton height={55} width={95} borderRadius={8} baseColor={lightMode ? "#E4E4E7" : "#3F3F46"} highlightColor={lightMode ? "#D4D4D8" : "#52525B"} />
                            <Skeleton height={55} width={95} borderRadius={8} baseColor={lightMode ? "#E4E4E7" : "#3F3F46"} highlightColor={lightMode ? "#D4D4D8" : "#52525B"} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LoadingTasks;