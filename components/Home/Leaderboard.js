import Image from "next/image";
import user from '../../assets/user.svg'
const Leaderboard = () => {
  return (
    <div className="leaderboard-container">
      <div className="leaderboard-flex">
        <h1>Leaderboard</h1>
        <div className="leaderboard-dots">
          <div className="dots-flex">
            <div className="leaderboard-dot first"></div>
            <span>All Time Edits</span>
          </div>
          <div className="dots-flex">
            <div className="leaderboard-dot sec"></div>
            <span>Edits This Week</span>
          </div>
        </div>
      </div>
      <div className="leaderboard-main">
        <div className="leaderboard-left">
          <div className="single-person">
            <div className="person-img-container">
              <Image
                src={user}
                alt=""
                layout="responsive"
                width="50"
                height="50"
              />
            </div>
            <div className="single-person-right">
              <h1 className="single-person-name">Banana</h1>
              <div className="flex-lines">
                <div className="green-line"></div>
                <span className="leaderboard-score">1,828,497</span>
              </div>
              <div className="flex-lines">
                <div className="orange-line"></div>
                <span className="leaderboard-score">5,655</span>
              </div>
            </div>
          </div>
          <div className="single-person">
            <div className="person-img-container">
              <Image
                src={user}
                alt=""
                layout="responsive"
                width="50"
                height="50"
              />
            </div>
            <div className="single-person-right">
              <h1 className="single-person-name">Mikedeth</h1>
              <div className="flex-lines">
                <div className="green-line w-28"></div>
                <span className="leaderboard-score">486,860</span>
              </div>
              <div className="flex-lines">
                <div className="orange-line w-2/4"></div>
                <span className="leaderboard-score">4,605</span>
              </div>
            </div>
          </div>
          <div className="single-person">
            <div className="person-img-container">
              <Image
                src={user}
                alt=""
                layout="responsive"
                width="50"
                height="50"
              />
            </div>
            <div className="single-person-right">
              <h1 className="single-person-name">Ian Grimm</h1>
              <div className="flex-lines">
                <div className="green-line w-52"></div>
                <span className="leaderboard-score">14,215</span>
              </div>
              <div className="flex-lines">
                <div className="orange-line"></div>
                <span className="leaderboard-score w-48">3,144</span>
              </div>
            </div>
          </div>
          <div className="single-person">
            <div className="person-img-container">
              <Image
                src={user}
                alt=""
                layout="responsive"
                width="50"
                height="50"
              />
            </div>
            <div className="single-person-right">
              <h1 className="single-person-name">lineker</h1>
              <div className="flex-lines">
                <div className="green-line w-11"></div>
                <span className="leaderboard-score">187,288</span>
              </div>
              <div className="flex-lines">
                <div className="orange-line w-48"></div>
                <span className="leaderboard-score">2,750</span>
              </div>
            </div>
          </div>
          <div className="single-person">
            <div className="person-img-container">
              <Image
                src={user}
                alt=""
                layout="responsive"
                width="50"
                height="50"
              />
            </div>
            <div className="single-person-right">
              <h1 className="single-person-name">Torq00</h1>
              <div className="flex-lines">
                <div className="green-line w-70"></div>
                <span className="leaderboard-score">1,687,856</span>
              </div>
              <div className="flex-lines">
                <div className="orange-line w-48"></div>
                <span className="leaderboard-score">2,472</span>
              </div>
            </div>
          </div>
        </div>
        <div className="leaderboard-right">
          <div className="single-person">
            <div className="person-img-container">
              <Image
                src={user}
                alt=""
                layout="responsive"
                width="50"
                height="50"
              />
            </div>
            <div className="single-person-right">
              <h1 className="single-person-name">MADDY</h1>
              <div className="flex-lines">
                <div className="green-line w-10"></div>
                <span className="leaderboard-score">23,035</span>
              </div>
              <div className="flex-lines">
                <div className="orange-line w-3/4"></div>
                <span className="leaderboard-score">4,874</span>
              </div>
            </div>
          </div>
          <div className="single-person">
            <div className="person-img-container">
              <Image
                src={user}
                alt=""
                layout="responsive"
                width="50"
                height="50"
              />
            </div>
            <div className="single-person-right">
              <h1 className="single-person-name">talestalker</h1>
              <div className="flex-lines">
                <div className="green-line w-48"></div>
                <span className="leaderboard-score">587,064</span>
              </div>
              <div className="flex-lines">
                <div className="orange-line w-64"></div>
                <span className="leaderboard-score">3,469</span>
              </div>
            </div>
          </div>
          <div className="single-person">
            <div className="person-img-container">
              <Image
                src={user}
                alt=""
                layout="responsive"
                width="50"
                height="50"
              />
            </div>
            <div className="single-person-right">
              <h1 className="single-person-name">Sheigutn</h1>
              <div className="flex-lines">
                <div className="green-line w-20"></div>
                <span className="leaderboard-score">114,583</span>
              </div>
              <div className="flex-lines">
                <div className="orange-line w-56"></div>
                <span className="leaderboard-score">2,932</span>
              </div>
            </div>
          </div>
          <div className="single-person">
            <div className="person-img-container">
              <Image
                src={user}
                alt=""
                layout="responsive"
                width="50"
                height="50"
              />
            </div>
            <div className="single-person-right">
              <h1 className="single-person-name">synopsisconcept</h1>
              <div className="flex-lines">
                <div className="green-line w-2/3"></div>
                <span className="leaderboard-score">2,262,226</span>
              </div>
              <div className="flex-lines">
                <div className="orange-line w-48"></div>
                <span className="leaderboard-score">2,717</span>
              </div>
            </div>
          </div>
          <div className="single-person">
            <div className="person-img-container">
              <Image
                src={user}
                alt=""
                layout="responsive"
                width="50"
                height="50"
              />
            </div>
            <div className="single-person-right">
              <h1 className="single-person-name">francescouv</h1>
              <div className="flex-lines">
                <div className="green-line w-36"></div>
                <span className="leaderboard-score">493,009</span>
              </div>
              <div className="flex-lines">
                <div className="orange-line w-65"></div>
                <span className="leaderboard-score">2,350</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
