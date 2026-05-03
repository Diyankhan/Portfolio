import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import PhoneIcon from "@mui/icons-material/Phone";
import { useForm } from "react-hook-form";
function ContactForm({ loading, onSubmitData }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div className="col-md-5 my-5">
      <fieldset disabled={loading}>
        <form onSubmit={handleSubmit(onSubmitData)}>
          <div className="row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                {...register("firstName", {
                  required: {
                    value: true,
                    message: "First name is required",
                  },
                  minLength: {
                    value: 2,
                    message: "First name can't be less than 3 characters",
                  },
                  maxLength: {
                    value: 20,
                    message: "First name can't be greater than 20 characters",
                  },
                })}
              />
              {errors.firstName && (
                <p className="text-danger">{errors.firstName.message}</p>
              )}
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
                {...register("lastName", {
                  required: {
                    value: true,
                    message: "last name is required",
                  },
                  minLength: {
                    value: 2,
                    message: "Last name can't be less than 3 characters",
                  },
                  maxLength: {
                    value: 20,
                    message: "Last name can't be greater than 20 characters",
                  },
                })}
              />
              {errors.lastName && (
                <p className="text-danger">{errors.lastName.message}</p>
              )}
            </div>
          </div>

          <div className="form-group my-3">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              {...register("mail", { required: true, pattern: /^\S+@\S+$/ })}
            />
            {errors.mail && (
              <p className="text-danger">Please enter a valid e-mail.</p>
            )}
            <small id="emailHelp" className="form-text text-secondary">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="col pb-3">
            <label htmlFor="exampleInputSubject">Subject</label>
            <input
              type="text"
              className="form-control"
              placeholder="Subject"
              {...register("subject", {
                required: {
                  value: true,
                  message: "Please enter subject",
                },
                minLength: {
                  value: 5,
                  message: "Subject cannot be less than 5 characters",
                },
                maxLength: {
                  value: 100,
                  message: "Subject cannot be less than 100 characters",
                },
              })}
            />
            {errors.subject && (
              <p className="text-danger">{errors.subject.message}</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">Message</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              {...register("message", {
                required: {
                  value: true,
                  message: "Please enter message",
                },
                minLength: {
                  value: 10,
                  message: "Message cannot be less than 10 characters",
                },
              })}></textarea>
            {errors.message && (
              <p className="text-danger">{errors.message.message}</p>
            )}
          </div>
          <div className="d-flex justify-content-between my-4">
            {" "}
            <Button
              variant="contained"
              color="primary"
              startIcon={<PhoneIcon />}
              href="tel:+919889126891">
              Call Me
            </Button>
            <Button
              size="small"
              type="submit"
              endIcon={<SendIcon />}
              loading={loading}
              loadingPosition="end"
              variant="contained"
              sx={{
                "&.Mui-disabled": {
                  backgroundColor: "#1976d2",
                  color: "white",
                  opacity: 0.7,
                },
              }}>
              Send
            </Button>
          </div>
        </form>
      </fieldset>
    </div>
  );
}

export default ContactForm;
