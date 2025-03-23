type TypeFilter = {
  menu: boolean;
  toggle: () => void;
}

function Filters({ menu, toggle }: TypeFilter) {
  return (
    <div className={menu ? "Filters drop" : "Filters"} onClick={toggle}>
      
    </div>
  )
}

export default Filters