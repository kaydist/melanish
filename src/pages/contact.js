import React from "react";
import Layout from "../layouts/layout";

export default function ContactPage() {
  return (
    <Layout>
      <div className="w-full content-min-h max-h-screen col-between">
        <div className="w-full center min-h-[inherit]">
          <div className="flex flex-col-reverse md:flex-row md:between w-full h-fit">
            <div className="pl-body space-y-5 md:space-y-[2vw] mt-14">
              <div>
                <div>LAGOS, NIGERIA</div>
                <div>+2348 123 3578</div>
                <div>JOHN@ABURODOE.COM</div>
              </div>

              <div>
                <div>Instagram</div>
                <div>Behance</div>
                <div>Facebook</div>
              </div>
            </div>

            <div className="px-body md:px-0 text-[5.5rem] md:text-[15vw] font-bold w-fit text-left leading-[5rem] md:leading-[13vw]">
              WORK <br /> WITH US
            </div>
          </div>
        </div>

        <div className="text-center center w-full">Developed By: Kay</div>
      </div>
    </Layout>
  );
}
