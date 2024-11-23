import imageNotFound from '../../assets/imgs/undraw_page_not_found_re_e9o6.svg';
export default function NotFound() {
  return (
    <div className="container flex h-screen items-center justify-center ">
      <img className="w-96" src={imageNotFound} alt="" />
    </div>
  );
}
