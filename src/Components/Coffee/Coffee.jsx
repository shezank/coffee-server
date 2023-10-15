import { Link } from "react-router-dom";
import swal from "sweetalert";


const Coffee = ({ coffee }) => {
    const { _id, name, quentity, supplier, test, category, details, photo } = coffee;

    const handeleDeleted = id => {
        console.log(id)
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    fetch(`http://localhost:5000/coffee/${id}`,{
                        method: "DELETE"
                    })
                    .then(res => res.json())
                    .then(data => {
                            console.log(data)
                        swal("Successfully Deleted Your Coffe", {
                            icon: "success",
                        });
                    })

                } else {
                    swal("Your Coffe is safe!");
                }
            });
    }
    return (
        <div className="card card-side bg-base-100">
            <figure><img className="h-[300px]" src={photo} alt="Movie" /></figure>
            <div className="ml-5 flex items-center justify-between w-full">
                <div className="text-start">
                    <h2 className="text-xl font-bold">{name}</h2>
                    <p>{quentity}</p>
                    <p>{supplier}</p>

                </div>
                <div className="">
                    <div className="join join-vertical">
                        <button className="btn join-item">See</button>
                        <Link to={`/updatecoffee/${_id}`}><button className="btn join-item">Update</button></Link>
                        <button className="btn join-item"
                            onClick={() => handeleDeleted(_id)}
                        >X</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Coffee;