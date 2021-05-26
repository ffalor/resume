export default function Header() {
  return (
    <header class="text-white dark:text-white body-font bg-gray-800">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center md:text-xl text-base justify-center">
          <a href="#About" class="mr-5 hover:text-teal-300">
            About
          </a>
          <a href="#Experience" class="mr-5 hover:text-teal-300">
            Experience
          </a>
          <a href="#Education" class="mr-5 hover:text-teal-300">
            Education
          </a>
          <a href="#Skills" class="mr-5 hover:text-teal-300">
            Skills
          </a>
          <a href="#Projects" class="mr-5 hover:text-teal-300">
            Projects
          </a>
        </nav>
      </div>
    </header>
  );
}
