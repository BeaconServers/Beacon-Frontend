using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace Beacon
{
    class Test
    {
        public static void Thing()
        {
            JObject json = JObject.Parse(File.ReadAllText(
                @"C:\Users\lgast\OneDrive\Documents\GitHub\Beacon\resources\json\gamelaunch\counterstrikesource.json"));
            // var result = JsonConvert.DeserializeObject<LaunchOptions>(json.ToString());
            // Console.WriteLine(result.gamemodes[0].name);
        }
    }

    public class LaunchOptions: JObject
    {
        public List<MatchMakingRegion> regions;
        public List<GameMode> gamemodes;
        public List<Maps> maps;
        public List<Image> image;
    }

    public class MatchMakingRegion
    {
        public string name;
    }

    public class GameMode
    {
        public int id;
        public string name;
    }

    public class Maps
    { 
        public List<DefusalMaps> defusalMaps;
        public List<HostageMaps> hostageMaps;
    }

    public class DefusalMaps
    {
        public int id;
        public string name;
    }

    public class HostageMaps
    {
        public int id;
        public string name;
    }

    public class Image
    {
        public string name;
        public string suffix;
    }
}
