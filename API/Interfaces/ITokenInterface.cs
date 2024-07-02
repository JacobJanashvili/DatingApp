using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.DTO;
using API.Model;

namespace API.Interfaces
{
    public interface ITokenInterface
    {
        string CreateToken(AppUser user);
    }
}