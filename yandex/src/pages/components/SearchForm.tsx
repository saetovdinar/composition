



/**
 * A simple component that displays a search form.
 *
 * @returns {JSX.Element} The JSX element representing the component.
 */

export default function SearchForm(): JSX.Element {
  
 

    return (
      
        <form style={{display: "flex", flexDirection: "column"}}>
            <label>
                <input type="text" placeholder="Search for anything" />
                <button>Search</button>
            </label>
            
            <div>Найдется все</div>
        </form>

      
    );
  }