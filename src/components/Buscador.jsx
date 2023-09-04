  function Buscador({ onSearch }) {
    return (
      <div className="text-center p-5">
        <input 
          type="text" 
          placeholder="Buscar por nombre..." 
          onChange={e => onSearch(e.target.value)} 
        />
      </div>
    );
  }
  
  export default Buscador;
  
