import ComponentB from "./BComponent";

function A({spalva1, spalva2}) {

    return (
        <div className="container">
        <ComponentB spalva={spalva1}></ComponentB>
        <ComponentB spalva={spalva2}></ComponentB>
        </div>
    )
}

export default A;