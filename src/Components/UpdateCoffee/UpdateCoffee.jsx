import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";


const UpdateCoffee = () => {
    const coffee = useLoaderData();
    console.log(coffee)
    const { _id, name, quentity, supplier, test, category, details, photo } = coffee;

    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const quentity = form.quentity.value;
        const supplier = form.supplier.value;
        const test = form.test.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const updateCoffee = { name, quentity, supplier, test, category, details, photo };
        console.log(updateCoffee);

        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updateCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    swal("Update!", "Successfully Update Coffee  ", "success");
                }
            })
    }
    return (
        <div className="bg-[#F4F3F0] py-10">
            <h1 className="text-5xl font-extrabold">Update You Coffee</h1>
            <form onSubmit={handleUpdate}>
                {/* Name and Quentity */}
                <div className="flex gap-3  p-3">
                    <div className="form-control w-1/2 ">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <input type="text" name="name" defaultValue={name} placeholder="Product Name" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-1/2 ">
                        <label className="label">
                            <span className="label-text">Product Quentity</span>
                        </label>
                        <input type="text" name="quentity" defaultValue={quentity} placeholder="Product Quentity" className="input input-bordered w-full" />

                    </div>
                </div>
                {/* Supplier and Test */}
                <div className="flex gap-3  p-3">
                    <div className="form-control w-1/2 ">
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <input type="text" name="supplier" defaultValue={supplier} placeholder="Supplier Name" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-1/2 ">
                        <label className="label">
                            <span className="label-text">Test</span>
                        </label>
                        <input type="text" name="test" defaultValue={test} placeholder="Product Test" className="input input-bordered w-full" />

                    </div>
                </div>
                {/* Category and Details */}
                <div className="flex gap-3  p-3">
                    <div className="form-control w-1/2 ">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <input type="text" name="category" defaultValue={category} placeholder="Product Category" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-1/2 ">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <input type="text" name="details" defaultValue={details} placeholder="Product Details" className="input input-bordered w-full" />

                    </div>
                </div>
                {/* Photo */}
                <div className="flex gap-3  p-3">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input type="text" name="photo" defaultValue={photo} placeholder="Product Photo URL" className="input input-bordered w-full" />
                    </div>
                </div>
                <input className="btn btn-block" type="submit" value="Update" />
            </form>
        </div>
    );
};

export default UpdateCoffee;