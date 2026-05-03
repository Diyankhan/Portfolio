import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { useForm } from "react-hook-form";
function AddProjectForm({ Prevent, loading }) {
  let currentYear = new Date().getFullYear();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div className="container">
      <div className="row">
        <form
          className="col-11 col-md-6 mx-auto border p-0 my-5 shadow-lg"
          onSubmit={handleSubmit(Prevent)}
          noValidate>
          <h2 className="text-center p-3">Add new Project</h2>
          <hr />
          <div className="px-5 py-3">
            <div>
              <label htmlFor="project-title" className="form-label">
                Project Title:
              </label>
              <input
                type="text"
                className="form-control"
                id="project-title"
                placeholder="Enter project title"
                required
                {...register("title", { required: true })}
              />
              {errors.title && <p className="text-danger">Title is required</p>}
            </div>

            <div>
              <label htmlFor="project-category" className="form-label mt-4">
                Category
              </label>
              <input
                type="text"
                className="form-control"
                id="project-category"
                placeholder="Enter category"
                required
                {...register("category")}
              />
            </div>

            <label htmlFor="project-year" className="form-label mt-4">
              Year
            </label>
            <input
              type="number"
              className="form-control"
              id="category"
              placeholder="Enter year"
              required
              {...register("year", {
                required: "Year is required",
                valueAsNumber: true,
                min: {
                  value: 2020,
                  message: "Year cannot be less than 2020",
                },
                max: {
                  value: currentYear,
                  message: `Year cannot be greater than ${currentYear}`,
                },
              })}
            />
            {errors.year && (
              <p className="text-danger">{errors.year.message}</p>
            )}
            <div>
              <label htmlFor="about-project" className="form-label mt-4 ">
                About Project:
              </label>
              <textarea
                className="form-control"
                id="about-project"
                placeholder="Enter project description"
                rows={6}
                required
                {...register("about", {
                  required: true,
                  minLength: 300,
                  maxLength: 700,
                })}></textarea>
              {errors.about && (
                <p className="text-danger">
                  About can be between 300 to 700 characters
                </p>
              )}
            </div>

            <div>
              <label htmlFor="fileImage" className="form-label mt-4 ">
                Project image:
              </label>
              <input
                type="file"
                accept="image/*"
                className="form-control"
                id="fileImage"
                placeholder="Upload image"
                required
                {...register("img", {
                  required: "Img is required",
                  validate: (FileList) => {
                    let file = FileList[0];
                    if (file && file.size > 1024 * 1024) {
                      return "Img size cannot be greater than 1MB.";
                    }
                  },
                })}
              />
              {errors.img && (
                <p className="text-danger">{errors.img.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="projectLink" className="form-label mt-4 ">
                Project Link:
              </label>
              <input
                type="text"
                className="form-control"
                id="projectLink"
                placeholder="Enter project link"
                required
                {...register("projectLink", {
                  required: {
                    value: true,
                    message: "Link is required",
                  },
                })}
              />
              {errors.projectLink && (
                <p className="text-danger">{errors.projectLink.message}</p>
              )}
            </div>

            <div className="text-end my-5">
              <Button
                variant="contained"
                endIcon={<SendIcon />}
                loading={loading}
                loadingPosition="end"
                type="submit">
                Submit
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddProjectForm;
