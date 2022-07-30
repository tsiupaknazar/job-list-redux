import { useDispatch } from "react-redux";
import { addFilter } from "../filter/filterSlice";

import {JobPosition} from './JobPosition'
import {useFetchPositions} from './useFetchPositions';
import {usePositions} from './usePositions'

const JobList = () => {
  useFetchPositions();

  const positions = usePositions();
  const dispatch = useDispatch();

  const handleAddFilter = (filter) => {
    dispatch(addFilter(filter));
  }


  return (
    <div className='job-list'>
      {positions.map(item => (
        <JobPosition
          key={item.id}
          handleAddFilter={handleAddFilter}
          {...item}
        />
      ))}
    </div>
  )
}

export { JobList };