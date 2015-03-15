using Microsoft.AspNet.Mvc;
using System.Collections.Generic;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace WebAppSubscribeToWorkshop.Controllers
{
    public class WorkshopsController : Controller
    {
        // GET: /<controller>/
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public IEnumerable<Workshop> Listar()
        {
            Workshop workshop1 = new Workshop { Name = "TDD com Java 2", Date = "08/04/2015" };
            Workshop workshop2 = new Workshop { Name = "Git 1", Date = "15/04/2015" };

            List<Workshop> workshops = new List<Workshop> { workshop1, workshop2 };

            return workshops;
        }

        public IActionResult Create()
        {
            return View();
        }
    }
}
