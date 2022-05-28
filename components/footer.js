const Footer = () => {
    return ( 
        <footer>
            <div className='text-center p-4 text-gray-400 grid justify-center text-sm font-semibold'>
                 &copy;{new Date().getFullYear()} RECH, Felipe Elias. All Rights Reserved.
            </div>
        </footer>
     );
}
 
export default Footer;