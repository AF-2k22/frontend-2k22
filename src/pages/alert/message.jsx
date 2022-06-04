import Swal from "sweetalert2";

const Alert = (icon, title, text) => {
    Swal.fire({
        icon: icon,
        title: title,
        text: text,
    });
}

export default Alert;