import { useContext } from "react";
import DataContext from "@/app/Context/DataContext";

const Data = () => {
  const getData = useContext(DataContext);
  const tabs = [
    getData.sub == "Mathematics" &&
    getData.year == "B.Tech CSE 1st Semester" && {
      video: [
        {
          key: 1,
          heading: "Introduction to Matrices 1",
          description:
            " What is matix?, How to calculate Determinants?,Types of Determinants, Minor & Cofactors, and Properties of Determinants",
          link: "https://www.youtube.com/watch?v=b-UZJVdLbXc&list=PLvTTv60o7qj_tdY9zH7YceES7jfXiZkAz&index=1",
        },
        {
          key: 2,
          heading: "Introduction to Matrices 2",
          description:
            "Numericals on Determinants, Types of Matrices and Multiplication of Matrices & its properties ",
            link: "https://www.youtube.com/watch?v=OWykXurjpFU&list=PLvTTv60o7qj_tdY9zH7YceES7jfXiZkAz&index=2"
          },
          {
            key: 3,
            heading: "Properties of Matrices",
            description:
              " What is Adjoint matrix? What is Inverse of a matrix? What are symmetric, skew-symmetric and orthogonal matrices?? ",
            link: "https://www.youtube.com/watch?v=HyaeoGZyX10&list=PLvTTv60o7qj_tdY9zH7YceES7jfXiZkAz&index=3",
          },
          {
            key: 4,
            heading: "Rank of a matrix using Elementary Operations",
            description:
              " What is Rank of a matrix ?? How to calculate it ?? Calculation of Rank using Elementary transformation.",
            link: "https://youtu.be/p5rBJj5CKCg?si=pPXTxicqYATGcOGQ",
          },

          {
            key: 5,
            heading: "Rank & Inverse of Matrix",
            description:
              "Rank of a Matrix: Maximum independent rows/columns,Inverse of a Matrix: Multiplicative counterpart, yielding identity matrix when multiplied.",
            link: "https://www.youtube.com/live/RtuNwdHDEAw?si=uHWFRBzWHZQb_fTa",
          },
          {
            key: 6,
            heading: "Unitary Matrix",
            description:
              "Unitary Matrix Basics: Definition and properties, Applications: Quantum mechanics, signal processing, and data compression.",
            link: "https://www.youtube.com/live/3nafrDiN0gU?si=OwRhRtzVqLtxMySv",
          },
          {
            key: 7,
            heading: "Linear Form of Matrix",
            description:
              "Linear Form Basics: Understanding linear transformations and representations, Applications: Computer graphics, physics simulations, and engineering modeling.",
            link: "https://www.youtube.com/live/D5V0NXtWGtQ?si=2H3LmawO1R_bhZgy",
          },
          {
            key: 8,
            heading: "Taylor Series",
            description:
              " What is Taylor Theorem and how To Prove this? What is Taylor Series and how to expand this By Taylor Theorem?",
            link: "https://youtu.be/LEspaisjDFE?si=ygEIeVE__0-bMl1_",
          },
          {
            key: 9,
            heading: "Rank of Matrix Using Normal Form",
            description:
              "Concept of Normal form and its Type, Calculation of Rank Using Normal/Canonical Form along with example.",
            link: "https://www.youtube.com/watch?v=gdMfFdg6RNk",
          },
          {
            key: 10,
            heading: "Consistency of Linear Non-Homogeneous Equations",
            description:
              "Concept of consistency, how to check consistency, condition for unique solution, infinite solution and no solution",
            link: "https://www.youtube.com/watch?v=41Y38WjHbtE",
          },        
          {
            key: 11,
            heading: "Cayley Hamilton Theorem & its application",
            description:
              " Statement of Cayley Hamilton Theorem. Usage of Cayley Hamilton theorem. Solved problems",
            link: "https://youtu.be/H53VgxdohRM?si=RHrsvd26uMn3byRP",
          },
          {
            key: 12,
            heading: "Eigen Value and Eigen Vector",
            description:
              "Concept of Eigen value and Eigen vector. Working rule to find Eigen value and Eigen vector. Examples",
            link: "https://www.youtube.com/watch?v=ZX5YnDMzwbs",
          },         
        ],
        pyq: [
          {
            key: 1,
            heading: "Mathematics-I 2021",
            description:
              "Mathematics-I 2021 question paper of MAKAUT in-house batch",
          },
        ],
        notes: [
          {
            key: 1,
            heading: "Matrix Practice Problems",
            description:
              "Matrix Problems involving unitary matrix, rank of a matrix, orthogonal matrix, Trace of a matrix, etc.",
          },
        ],
      },

    getData.sub == "Electrical & Digital Electronics" &&
    getData.year == "B.Tech CSE 1st Semester" && {
      video: [
        {
          key: 1,
          heading:
            "Understand and analyze basic electric and magnetic circuits",
          description:
            "The horizontal arrays of a matrix are called its rows and the vertical arrays are called its columns. A matrix...",
          link: "https://www.youtube.com/watch?v=UdaDs-zKfsA",
        },
        {
          key: 2,
          heading:
            "Study the working principles of electrical machines and power converters.",
          description:
            "The horizontal arrays of a matrix are called its rows and the vertical arrays are called its columns. A matrix...",
          link: "https://youtu.be/j_4jvMwIla0?si=ue3tTdmOsEZrd1ai",
        },
        {
          key: 3,
          heading:
            "Introduce the components of low voltage electrical installations",
          description:
            "The horizontal arrays of a matrix are called its rows and the vertical arrays are called its columns. A matrix...",
          link: "https://youtu.be/2_deQIpxNkQ?si=qfU5fReEKM5_Etjb",
        },
        {
          key: 4,
          heading:
            "DC Circuits (BEE) Inductor (Energy stored and Power Absorbed by Inductor)",
          description:
            "This energy is actually stored in the magnetic field generated by the current flowing through the inductor",
          link: "https://youtu.be/Abgy3ITy2_Q?si=KsalRkGbhQ2pnlkA",
        },
        {
          key: 5,
          heading:
            "SEMICONDUCTOR TYPE | Intrinsic Extrinsic p-Type n-Type |",
          description:
            "P-type semiconductors are created by doping an intrinsic semiconductor with an electron acceptor element during manufacture",
          link: "https://youtu.be/DvYfs6rXKuE?si=26gAJ3Meg3Katg_U",
        },
        {
          key: 6,
          heading:
            "conductor insulator semiconductor",
          description:
            "Levels of conductivity are the main difference between conductors, semiconductors and insulators.",
          link: "https://youtu.be/UVIYqLYgM6k?si=DjC0VyV7nh4iGnBD",
        },

        {


          key: 7,
          heading:
            "All about Forward Bias",
          description:
            "In forward bias, the p-type(anode) of the semiconductor is connected to the positive end, and the n-type(cathode) is connected to the negative end of the battery.",
          link: "https://youtu.be/icrAf1us2IQ?si=t1Sm6NJFaQ72t6AA",
        },
        {
          key: 8,
          heading:
            " All about Reverse bias ",
          description:
            "The backward diode is a special form of tunnel diode in which the tunneling phenomenon is only incipient, and the negative resistance region virtually disappears",
          link: "https://youtu.be/u_8b4GAUWCg?si=tVdWEuqno9ddsw5h",
        },
        {
          key: 9,
          heading:
            " All about Ideal Diode (First Approximation of PN junction Diode) Basic Electronics",
          description:
            "An ideal diode means a perfect diode which has all properties in their perfect sense without any flaws",
          link:
            "https://www.youtube.com/watch?v=W_4rBZdd41Q&list=PL3qvHcrYGy1uF5KAGntUITTJ85Dm3Dtdy&index=5",
        },
        {
          key: 10,
          heading: "Photo Diode (Construction & Working) Special Purpose Diodes (Basic Electronics)",
          description: "A photodiode is a light-sensitive semiconductor diode.It produces current when it absorbs photons.",
          link: "https://www.youtube.com/watch?v=BZLOGi3t740&list=PL3qvHcrYGy1uF5KAGntUITTJ85Dm3Dtdy&index=36",
        },
        {
          key: 11,
          heading:
            " All about Zener Diode",
          description:
            "Zener diodes are semiconductor devices that allow current to flow in both directions but specialize in current flowing in reverse. Also known as breakdown diodes.",
          link:
            "https://youtu.be/qVwEVXf3CBQ?si=Go_1C_oDuR-9z1Z2",
        },
        {
          key: 12,
          heading:
            " characteristics of PN junction Diode (Diode thory & applications)",
          description:
            "PN junction diode has the ability to rectify electric current. It can create a potential barrier and make use of its capacitance properties. ",
          link:
            "https://youtu.be/7ITiehTTh-o?si=biSt8YIpolzsHOAy",
        },

        {
          key: 13,
          heading: "Introduction to LC Filter",
          description: "a suitable L and C network can effectively filter out the A.C component from the rectified wave.",
          link: "https://youtu.be/DBw2sNphRME?si=v8zXdz1LHlPHMZfe",
        },


        {
          key: 14,
          heading:
            "Introduction to Transistor",
          description:
            "A transistor is a type of semiconductor device that can be used to conduct and insulate electric current or voltage. ",
          link:
            "https://youtu.be/08jcU8rb9SU?si=h_6l-AoOAL6T6frK",
        },
        {
          key: 15,
          heading:
            "Working of Transistor (NPN)",
          description:
            "A transistor can act as a switch or gate for electronic signals, opening and closing an electronic gate many times per second",
          link:
            "https://youtu.be/tPE26DO3cDw?si=a9ar5g1s0UOvxu8g",
        },
        {
          key: 16,
          heading: "Operation of PNP Transistor - Bipolar Junction Transistor",

          description:
            "In a PNP transistor, the base current which enters into the collector is amplified",
          link:
            "https://youtu.be/Lx3ApgmyQlc?si=-1jDfPCanifda9LN",
        },

        {
          key: 17,
          heading:
            "MOSFET , EMOSFET , DMOSFET ",
          description:
            "MOSFET (Metal-Oxide-Semiconductor Field-Effect Transistor) is a type of transistor that includes subcategories such as E-MOSFET (Enhancement MOSFET) and D-MOSFET (Depletion MOSFET), each with distinct characteristics, used for electronic switching and amplification.",
            link: 
           "https://youtu.be/X4_8dh-J4ik?si=YYRGX4crLGd-RV0_",},
           {
            key:18,
            heading:
            "Clipper Circuits",
            description:
            "A clipper circuit is an electronic circuit that clips or cuts off a portion of the input waveform, used for limiting voltage levels or shaping waveforms in signal processing applications.",
            link:
            "https://www.youtube.com/watch?v=ZpTQAZbu-44&list=PL3qvHcrYGy1uF5KAGntUITTJ85Dm3Dtdy&index=14",
           },
           {
            key:19,
            heading:
            "Clamper Circuits",
            description:
            "Clamper circuits are electronic circuits that shift the DC level of a signal without affecting its shape, useful for tasks like DC restoration in communication systems.",
            link:
            "https://www.youtube.com/watch?v=wfc5PYw-IbM&list=PL3qvHcrYGy1uF5KAGntUITTJ85Dm3Dtdy&index=15",
           },
           {
            key:20,
            heading:
            "Half wave rectifier",
            description:
            "A half-wave rectifier is an electronic circuit that converts AC input to pulsating DC output by allowing only one half of the input waveform to pass.",
            link:
            "https://www.youtube.com/watch?v=gYxH-D9Det8&list=PL3qvHcrYGy1uF5KAGntUITTJ85Dm3Dtdy&index=8",
           },
           {key:21,
            heading:
            "Full Wave Rectifier",
            description:
            "A full-wave rectifier converts both halves of an alternating current (AC) input signal into direct current (DC), utilizing two diodes to ensure continuous flow in both polarities.",
            link:
            "https://www.youtube.com/watch?v=8FAaLGxM98U&list=PL3qvHcrYGy1uF5KAGntUITTJ85Dm3Dtdy&index=9",
           },
          {key:22,
            heading:
            "KCL",
            description:
            "KCL law is used to describe how a charge enters and leaves a wire junction point or node on a wire",
            link:
            "https://youtu.be/TaqJ4OYqv3A?si=ba2vJmVuXYTsGoDG",
           },
          {key:23,
            heading:
            "KVL",
            description:
            "Kirchhoff's Voltage Law (KVL) can be used to calculate the potential drop across a resistance.",
            link:
            "https://youtu.be/aZIizOWnuB8?si=nm3S-UiBDPj_DWxw",
           },
           {key:24,
            heading:
            "Thevenin's Theorem",
            description:
            "Thevenin's theorem is especially useful for analyzing circuits by removing the load resistance from the original circuit and simplifying.",
            link:
            "https://youtu.be/_h62NLQ33DA?si=qIyOP05uzxPZ3h3-",
           },
          {
            key:25,
            heading:
            "All about Norton's Theorm",
            description:
            "It states that any complex linear circuit can be simplified to an equivalent simple circuit with a single current source in parallel with a single resistor connected to a load.",
            link: 
           "https://youtu.be/T7MJpfhXGjs?si=gHQnaoByttYH814K",},
           {
            key:26,
            heading:
            "All about superposition theorm",
            description:
            "It states that in any linear, bilateral network where more than one source is present, the response across any element in the circuit is the sum of the responses obtained from each source considered separately.",
            link: 
           "https://youtu.be/1icXtW97tIo?si=OzOYPBIAh85zymP2",},
           {
            key:27,
            heading:
            "All about Maximum Power Transfer Theorm",
            description:
            "It explains that to generate maximum external power through a finite internal resistance (DC network), the resistance of the given load must be equal to the resistance of the available source.",
            link: 
           "https://youtu.be/U85eA3-suiQ?si=MA3dzftJRpr-pquE",},   
        ],

      ],

      pyq: [
        {
          key: 1,
          heading: "heading1",
          description: "des1",
        },
      ],
      notes: [
        {
          key: 1,
          heading: "heading1",
          description: "des1",
        },
        {
          key: 2,
          heading: "heading2",
          description: "des1",
        },
      ],
    },
    getData.sub == "Engineering Drawing" &&
    getData.year == "B.Tech CSE 1st Semester" && {
        video: [
         {
            key: 1,
            heading: "Plain and Diagonal Scales | Complete Concept & Problems ",
            description:
              "What is Representative fraction, Scale? How to construct a Plain Scale and Diagonal Scale? ",
            link: "https://www.youtube.com/watch?v=yneCL-mXeH8&list=PLIhUrsYr8yHx0C3ebAW-FQxTP8ig8-QxU&index=9",
          },
          {
            key: 2,
            heading: "Conic Sections | Part 1 | Introduction and Concept",
            description:
              "Introduction and Concept of Conic Sections",
            link: "https://youtu.be/3V_k9u3Uny8?si=soqM3Q4yHAF7ieVz",
          },
          {
            key: 3,
            heading: "Conic Sections | Part 2 | Ellipse in General Method",
            description:
              "Construction of Ellipse in general method ",
            link: "https://youtu.be/OM6FB3DWFTI?si=COmeg_Ke0z-5groH",
          },{
            key: 4,
            heading: "Conic Sections | Part 3 | Ellipse in Oblong Method",
            description:
              "Construction of Ellipse in oblong method ",
            link: "https://youtu.be/t5szsD_4kG4?si=J1Tj3mroLTsKipbr",
          },
          {
            key: 5,
            heading: "Conic Sections | Part 4 | Ellipse in Concentric Circles Method",
            description:
              "Construction of Ellipse in Concentric Circles Method",
            link: "https://youtu.be/UFpKFyLt8Iw?si=A51C_fxZFEvQOUHS",
          },
          {
            key: 6,
            heading: "Conic Sections | Part 5 | Ellipse in Arcs of Circles Method",
            description:
              "Construction of Ellipse in Arcs of Circles Method",
            link: "https://youtu.be/f2itGi4u3nE?si=KRPi7FF2qHrZ3959",
          },
          {
            key: 7,
            heading: "Conic Sections | Part 6 | Best Problems on Ellipse",
            description:
              "Problems and solutions on Construction of Ellipse",
            link: "https://youtu.be/Y-bR4ChEslY?si=TRmGouS7vU4ZU_rR",
          },
          {
            key: 8,
            heading: "Conic Sections | Part 7 | Parabola in General Method",
            description:
              "Construction of Parabola in General Method",
            link: "https://youtu.be/EEAjjP-Phe4?si=_ps9ap2SYZO4tlKN",
          },
          {
            key: 9,
            heading: "Conic Sections | Part 8 | Problem 1 on Parabola in Rectangle Method",
            description:
              "Problem 1 on Construction of Parabola in Rectangle Method",
            link: "https://youtu.be/XqB4MEzFkJ4?si=V3IwAR5kDjaLNJEc",
          },
          {
            key: 10,
            heading: "Conic Sections | Part 9 | Problem 2 on Parabola in Rectangle Method",
            description:
              "Problem 2 on Construction of Parabola in Rectangle Method",
            link: "https://youtu.be/O7ZcrsioRBE?si=A8fk46dqQnHNPdFy",
          },
          {
            key: 11,
            heading: "Conic Sections | Part 10 | Problem 3 on Parabola in Rectangle Method",
            description:
              "Problem 3 on Construction of Parabola in Rectangle Method",
            link: "https://youtu.be/g9YnfkMrR-w?si=uG3seShoeVsQRB4V",
          },
          {
            key: 12,
            heading: "Conic Sections | Part 11 | Problem 4 on Parabola in Tangent Method",
            description:
              "Problem 4 on Construction of Parabola in Tangent Method",
            link: "https://youtu.be/FMClHjnXk7Y?si=YhlWv13NWLHbMt1G",
          },
          {
            key: 13,
            heading: "Conic Sections | Part 12 | Hyperbola in General Method",
            description:
              "Construction of Hyperbola in General Method",
            link: "https://youtu.be/fWOJIxpTVa8?si=gOfm4MyC0Fo5i5t4",
          },
          {
            key: 14,
            heading: "Conic Sections | Part 13 | Problems on Hyperbola ",
            description:
              "Problems and Solutions on Construction of Hyperbola",
            link: "https://youtu.be/V5qsFot9dMQ?si=OTIzp3gd1KsjZtsE",
          },
          {
            key: 15,
            heading: "Conic Sections | Part 16 | Hyperbola in Arcs of Circles Method ",
            description:
              "Construction of Hyperbola in Arcs of Circles Method ",
            link: "https://youtu.be/_CeQjBs5AT8?si=omlj6HEwRo0ErUIv",
          },
          {
            key: 16,
            heading: "Conic Sections | Part 17 | Tangent and Normal to Different Conic Sections ",
            description:
              "Construction of Tangent to Ellipse, Parabola, Hyperbola ",
            link: "https://youtu.be/OnXeBDJbEe8?si=znpXlBnYd6GrsWZi",
          },
          {
            key: 17,
            heading: "Introduction to Orthographic Projection",
            description:
              "In this video you will get a detailed understanding about orthographic projection",
            link: "https://www.youtube.com/watch?v=SB83cUaAiCM&list=PLIhUrsYr8yHx0C3ebAW-FQxTP8ig8-QxU&index=1",

          },
          {
            key: 18,
            heading: "Projection of Point",
            description:
              "What is Projection of Point?",
            link: "https://www.youtube.com/watch?v=aZ3gnOQIFHI&list=PLIhUrsYr8yHx0C3ebAW-FQxTP8ig8-QxU&index=2",
          },
          {
            key: 19,
            heading: "Projection of Point | Problem Series ",
            description:
              "Problems on Projection of point ",
            link: "https://youtube.com/watch?v=MzbxVLFKN9g&list=PLIhUrsYr8yHx0C3ebAW-FQxTP8ig8-QxU&index=5",
          },
          {
            key: 20,
            heading: "Introduction to Projection of Lines Part1",
            description:
              "3D projections of lines",
            link: "https://youtube.com/watch?v=MSg7DpKgaK8&list=PLIhUrsYr8yHx0C3ebAW-FQxTP8ig8-QxU&index=3",
          },
          {
            key: 21,
            heading: "Introduction to Projection of Lines Part2",
            description:
              "Introduction to Projection of Lines",
            link: "https://www.youtube.com/watch?v=wzxAFXejjw8&list=PLIhUrsYr8yHx0C3ebAW-FQxTP8ig8-QxU&index=4",
          },
          {
            key: 22,
            heading: "Projection of Lines | Problem Series | Part 1 ",
            description:
              "Problems on Projection of lines",
            link: "https://www.youtube.com/watch?v=BaaxLHH1d-Q&list=PLIhUrsYr8yHx0C3ebAW-FQxTP8ig8-QxU&index=6",
          },
          {
            key: 23,
            heading: "Projection of Lines | Problem Series | Part 2 ",
            description:
              "Projection of Lines | Problem Series | Part 2 ",
            link: "https://www.youtube.com/watch?v=f9e2xq3yKQ0&list=PLIhUrsYr8yHx0C3ebAW-FQxTP8ig8-QxU&index=7",
          },
          {
            key: 24,
            heading: "Projection of Lines | Problem Series | Part 3 ",
            description:
              "Projection of Lines | Problem Series | Part 3 ",
            link: "https://www.youtube.com/watch?v=RR6k8Djbvh8&list=PLIhUrsYr8yHx0C3ebAW-FQxTP8ig8-QxU&index=8",
          },
          {
            key: 25,
            heading: "Projection of Planes Idea & Standard Procedure",
            description:
              "Projection of Planes Idea & Standard Procedure",
            link: "https://www.youtube.com/watch?v=SNWhs81ho0Q&list=PLIhUrsYr8yHx0C3ebAW-FQxTP8ig8-QxU&index=10",
          },
          {
            key: 26,
            heading: "Projection of Planes | Problem Series | Part 1",
            description:
              "Problems of Projection of Planes",
            link: "https://youtu.be/anG2oGzGgF8?si=gWV64YHaVoPXCT2-",
          },
          {
            key: 27,
            heading: "Projection of Planes | Problem Series | Part 2",
            description:
              "Problems of Projection of Planes",
            link: "https://youtu.be/qQsdiV9PPWI?si=2gB9O9p1eFaE5nYP",
          },
          {
            key: 28,
            heading: "Projection of Planes | Problem Series | Part 3",
            description:
              "Problems of Projection of Planes",
            link: "https://youtu.be/r7O9SU9w_Eg?si=RGnjXus0GNwWbO3R",
          },
          {
            key: 29,
            heading: "Projection of Solids Idea & Standard Procedure",
            description:
              "How solids are classified and learn to draw the projection of solids when it is inclined to HP, VP and even both??",
            link: "https://youtu.be/S3ma-LKVJdI?si=NbtAjiWNTGgSfnpz",
          },
          {
            key: 30,
            heading: "Projection of Solids | Problem Series | Part 1",
            description:
              "Problems of Projection of Solids ",
            link: "https://youtu.be/gb3OCnkr5Ts?si=q29rB0IT7vc21DM6",
          },
          {
            key: 31,
            heading: "Projection of Solids | Problem Series | Part 2",
            description:
              "Problems of Projection of Solids ",
            link: "https://youtu.be/HQa3GwmGfEY?si=RNWN63NFokE03swV",
          },
          {
            key: 32,
            heading: "Isometric Projection | Part 1 |",
            description:
              "Iso-view and Iso-Projection",
            link: "https://youtu.be/9aFDVSIcdvI?si=A-y3pE1ba56mvRxt",
          },
          {
            key: 33,
            heading: "Isometric Projection | Part 2 |",
            description:
              "Orthographic Projection and Isometric View",
            link: "https://youtu.be/tLFjCS3h9MY?si=k8_eGi2WdN2_eyem",
          },
          {
            key: 34,
            heading: "Isometric Projection | Part 5 |",
            description:
              "Problem 4 on Isometric View",
            link: "https://youtu.be/TqrID4SeFTo?si=cX0QE-aicjyM_lLA",
          },
          {
            key: 35,
            heading: "Isometric Projection | Part 6 |",
            description:
              "Problem 5 on Isometric View",
            link: "https://youtu.be/ilWFZOfmvI8?si=OVwRHWSkwdoDqC15",
          },
          {
            key: 36,
            heading: "Section of Solids | Concept & Problem Series | Part 1",
            description:
              "Concepts & Problems of Section of Solids",
            link: "https://youtu.be/tm3Ty2yimbc?si=wDPDqes3yz2vHJB4",
          },
          {
            key: 37,
            heading: "Section of Solids | Concept & Problem Series | Part 2",
            description:
              "Concepts & Problems of Section of Solids",
            link: "https://youtu.be/2HA5eTpO6ec?si=gXBdx-cn0Ut-9Mec",
          },
          {
            key: 38,
            heading: "Development of Surfaces | Part 1",
            description:
              "Devlopment of surfaces of Prism and Pyramid",
            link: "https://youtu.be/8qpTtaTSdBA?si=THJdUA088KiEUl0L",
          },
          {
            key: 39,
            heading: "Development of Surfaces | Part 2",
            description:
              "Devlopment of surfaces of Cone and Cylinder",
            link: "https://youtu.be/8yWsVAeeB78?si=WsFnVxY1TKpx-vXv",
          },
        ],
        pyq: [
          {
            key: 1,
            heading: "heading1",
            description: "des1",
          },
        ],
        notes: [
          {
            key: 1,
            heading: "heading1",
            description: "des1",
          },
        ],
      },
    getData.sub == "Chemistry" &&
    getData.year == "B.Tech CSE 1st Semester" && {
      video: [
        {
          key: 1,
          heading: "Atomic and Molecular Structure | Dalton's and Rutherford Atomic Model",
          description:
            "Dalton hypothesized that atoms were solid spheres. Rutherford's nuclear model showed atoms with a nuclear center and other particles randomly orbiting at a distance.",
          link: "https://youtu.be/NMN1zm_X9bk?si=8kktSlGexUsW6eJA",
        },
        {
          key: 2,
          heading: "Atomic and Molecular Structure | Bohr's Atomic Model",
          description:
            "The Bohr model postulates that electrons orbit the nucleus at fixed energy levels.",
          link: "https://youtu.be/ULarF8oaBYc?si=nLzFlhoKFV52LVX1",
        },
        {
          key: 3,
          heading: "Atomic and Molecular Structure | QUANTUM MECHANICAL MODEL",
          description:
            "The Quantum Mechanical Model of the Atom views electrons within an atom as waves, not as particles as previously believed.",
          link: "https://youtu.be/Jo2OjH7DF6A?si=OYcwixVquoyv603G",
        },
        {
          key: 4,
          heading: "Atomic and Molecular Structure | Shape of Orbitals and Hydrogen Energy",
          description:
            "The orbital energies obtained for hydrogen using quantum mechanics are exactly the same as the allowed energies calculated by Bohr.",
          link: "https://youtu.be/0eHCtql4QVc?si=V4Xki6BTW9zXNr3O",
        },
        {
          key: 5,
          heading: "Atomic and Molecular Structure | Electronic Configuration",
          description:
            "Electron configurations describe where electrons are located around the nucleus of an atom.",
          link: "https://youtu.be/QvznEhd-8Ts?si=4-3ui46QkBsWYpE4",
        },
        {
          key: 6,
          heading: "Atomic and Molecular Structure | Molecular Orbital Theory",
          description:
            " The molecular orbital theory states that each atom tends to combine together and form molecular orbitals.",
          link: "https://youtu.be/e0hyIUS7PfA?si=cNBDwB_geXZv7elg",
        },
        {
          key: 7,
          heading: "Atomic and Molecular Structure | Sigma Bond & Pi Bond",
          description:
            "Sigma bonds are formed by the axial overlap of half- filled atomic orbitals. Pi bonds are formed through the lateral overlap of the half - filled atomic orbitals.",
          link: "https://youtu.be/YvUs43mTSnY?si=z7R0H7lKnA5e9ZRV",
        },
        {
          key: 8,
          heading: "Atomic and Molecular Structure | Molecular Orbital Energy Level For Homonuclear Diatomic Molecules",
          description:
            "Homonuclear diatomic molecules are made up of two chemically bonded atoms of the same element.",
          link: "https://youtu.be/bT-1hiZAWJM?si=31kyFu_kdRidAY69",
        },
        {
          key: 9,
          heading: "Atomic and Molecular Structure | Molecular Orbital Energy Level For Heteronuclear Diatomic Molecules",
          description:
            "Diatomic molecules with two different atoms are called heteronuclear diatomic molecules.",
          link: "https://youtu.be/QKKGvnf6cv8?si=hvw-ofC9a1lO9Gsl",
        },
        {
          key: 10,
          heading: "Atomic and Molecular Structure | CFT",
          description: 
            " A bonding model that explains many important properties of transition-metal complexes, including their colors, magnetism, structures, stability, and reactivity",
          link: "https://youtu.be/H0lTUapkDo4?si=Jw5lnp1cZKtuMtPV ",
        },
        {
          key: 11,
          heading: "Atomic and Molecular Structure | Band theory of solid",
          description: 
            " Electrons jump from valence band to conduction band even at ordinary temperature and if this happens then the solid conducts electricity",
          link: "https://youtu.be/g82XpUsZsEI?si=QYKpcveSsf4GMSg-",
        
        },
        {
          key: 12,
          heading: "Atomic and Molecular Structure | Band theory of metal",
          description: "Based on the valence band and the conduction band. It is also known as the band theory of solids or zone theory of solids",
          link: "https://youtu.be/ow7HXwj4KIk?si=oHQmSH4wpacppWEu",
        
        },
        {
          key: 13,
          heading: "Spectroscopy | Introduction",
          description:
            "Basic introduction of spectroscopy",
          link: "https://youtu.be/B2tPeoKgDKQ?si=uKOMHa6aOHkKirt8",
        },
        {
          key: 14,
          heading: "Spectroscopy | UV visible Spectroscopy",
          description:
            "Describing the secrets of molecules with UV-Visible Spectroscopy",
          link: "https://youtu.be/KkrTrTdfiBM?si=cMXMXmao5YxhqhBW",
        },
        {
          key: 15,
          heading: "Spectroscopy | Instrumentation and application of UV visible spectroscopy",
          description:
            "Instrumentation and practical applications of UV-Visible Spectroscopy",
          link: "https://youtu.be/-w0GytWMvms?si=cDTUEiDtCOp7juZj",
        },
        {
          key: 16,
          heading: "Spectroscopy | Principle of IR spectroscopy",
          description:
            "Exploring the fundamental principles behind infrared spectroscopy",
          link: "https://youtu.be/gqzR8-Vlmgc?si=g581viVAYi7C97zk",
        },
        {
          key: 17,
          heading: "Spectroscopy | Instrumentation & application of IR spectroscopy",
          description:
            "Exploring the fundamentals and diverse applications of Infrared Spectroscopy",
          link: "https://youtu.be/DhDhVbTT9sQ?si=2eruMZ2zsiocytZH",
        },
        {
          key: 18,
          heading: "Spectroscopy | Raman Spectroscopy | Raman Effect | Raman Scattering I Vibrational rotational spectroscopy",
          description:
            "The principle involved in Raman Spectroscopy",
          link: "https://youtu.be/B0Z6hTYseCE?si=X_YJ-qFtv4vCFgv_",
        },
        {
          key: 19,
          heading: "Spectroscopy | Selection rule for Raman Spectroscopy | Identification of IR & Raman active molecules",
          description:
            "To identify Raman active and Inactive molecules.",
          link: "https://youtu.be/9wOL3lgOziw?si=ZP-94CDAEaNOT7rY",
        },
        {
          key: 20,
          heading: "Spectroscopy | Raman Active vibrations of CO2 | Raman active and inactive vibrations in CO2 | Vibrations in CO2",
          description:
            "Explains the Raman active and inactive vibrations in CO2. it also explains the IR active and Inactive Vibrations in CO2.",
          link: "https://youtu.be/fJjlI7p-n0U?si=1UuH4vrmcWs9oqeT",
        },
        {
          key: 21,
          heading: "Spectroscopy | Microwave Spectroscopy | Rotational Spectroscopy | Microwave spectroscopy in Chemistry ",
          description:
            "Why Microwave spectroscopy is known as Rotational spectroscopy",
          link: "https://youtu.be/ciUYfHviZCs?si=f8TN26veSAj9_6LC",
        },
        {
          key: 22,
          heading: "Spectroscopy | NMR | Nuclear Magnetic Resonance Spectroscopy | Principle | Introduction",
          description:
            " Principle of NMR spectroscopy and NMR active and Inactive nuclei",
          link: "https://youtu.be/uYa19hpVYxU?si=bBK2cG6nEqFDZzrQC",
        },
        {
          key: 23,
          heading: "Spectroscopy | NMR Spectroscopy | Chemical shift | Shielding & Deshielding | Equivalent Non-Equivalent Protons | TMS",
          description:
            "  Chemical shift, Shielding and non-shielding effect Equivalent and non-equivalent protons del and tau scale TMS as a reference ",
          link: "https://youtu.be/qnjW7zJ24Hk?si=jPmmL75EdSB2xFk6",
        },
        {
          key: 24,
          heading: "Spectroscopy | NMR Spectroscopy | Spin-spin coupling | Splitting of signals | Numbers of signals ",
          description:
            " Chemical shift and spin-spin coupling",
          link: "https://youtu.be/gGY52XWF0cM?si=PcPQjoknvKkEnBUJ",
        },
        {
          key: 25,
          heading: "Intermolecular Forces & Critical Phenomena | Introduction",
          description:
            " Intermolecular forces are forces of attraction or repulsion which act between neighboring particles (atoms, molecules or ions)",
          link: "https://youtu.be/B1loRheEJoA?si=M5Lmm9Qte4s3mozW",
        },
        {
          key: 26,
          heading: "Intermolecular Forces & Critical Phenomena | Gas Laws & Ideal Gas Equation",
          description:
            "The fundamental gas laws are the following: Boyle's Law, Charles' Law, and Avogadro's Law.",
          link: "https://youtu.be/FokA8jZX0NU?si=QkEURQMCEdL-PSs8",
        },
        {
          key: 27,
          heading: "Intermolecular Forces & Critical Phenomena | Kinetic Molecular Theory of Gases",
          description:
            "The kinetic theory describes a gas as a large number of submicroscopic particles (atoms or molecules), all of which are in constant, random motion.",
          link: "https://youtu.be/wvpat4dNOjc?si=o5qshDI4r37sKXen",
        },
        {
          key: 28,
          heading: "Intermolecular Forces & Critical Phenomena | Ideal Gas Equation",
          description: 
            "Ideal gas equation, PV = nRT, where P = Pressure, V = volume, n = number of moles, R = Universal gas constant, T = Temperature.",
          link: "https://youtu.be/H4vXyUo-fL8?si=VFE5XiCepiDLy7s2",
        },
        {
          key: 29,
          heading: "Intermolecular Forces & Critical Phenomena | Vander Waals Equation of States for Real Gas",
          description:
            "The van der Waals equation is written like this: (P + an2 /V2 )(V-nb) = nRT",
          link: "https://youtu.be/tm7L-HeP6TI?si=TOjIF3BbPjUPjg1j",
        },
        {
          key: 30,
          heading: "Intermolecular Forces & Critical Phenomena | Joule Thomson Effect",
          description:
            "Joule-Thomson effect, the change in temperature that accompanies expansion of a gas without production of work or transfer of heat.",
          link: "https://youtu.be/YOsziZkaDOE?si=EM7Waf3pF6Fsrc3R",
        },
        {
          key: 31,
          heading: "Thermodynamics | Introduction to Thermodynamics",
          description:
            "Thermodynamics is the science of the relationship between heat, work, temperature, and energy.",
          link: "https://youtu.be/72JId0JrNKU?si=0dg-9XcP_KkAG3K2",
        },
        {
          key: 32,
          heading: "Thermodynamics | Thermodynamic Systems",
          description:
            "A thermodynamic system is defined as a quantity of matter or a region in space that is of interest.",
          link: "https://youtu.be/H3dCYqw-Y4o?si=TnwnHGTOdOsgZi-t",
        },
        {
          key: 33,
          heading: "Thermodynamics | Thermodynamic Properties and Process",
          description:
            "Some basic concepts related to thermodynamic properties and thermodynamic processes.",
          link: "https://youtu.be/ke1Qfc5SnnE?si=hjeYNlBX4XNUkjID",
        },
        {
          key: 34,
          heading: "Thermodynamics | Different Types Of Thermodynamic Process",
          description:
            "Different types of thermodynamic processes on the basis of pressure, temperature and volume.",
          link: "https://youtu.be/llJd3XcboBo?si=hew8qTo8OXmSzY_N",
        },
        {
          key: 35,
          heading: "Thermodynamics | Quasistatic Process ",
          description:
            "Some basic concepts related to quasistatic process.",
          link: "https://youtu.be/GDI2bVji2DU?si=b1zf42vOnFxZB-UV",
        
        },
        {
          key: 36,
          heading: "Thermodynamics | Thermodynamic Equilibrium ",
          description:
            "The properties of which do not change with time and that can be changed to another condition only at the expense of effects on other systems",
          link: "https://youtu.be/LH40zR2EPmQ?si=TPNRRm9LZkIZYITA",
        },
        {
          key: 37,
          heading: "Thermodynamics | Pure Substance And State Postulate",
          description:
            "The state postulate for a simple, pure substance states that the equilibrium state can be determined by specifying any two independent intensive properties",
          link: "https://youtu.be/eP9Fd2N2Jtc?si=BSo52O_xDmGrA",
        },
        {
          key: 38,
          heading: "Thermodynamics | Concept Of Continuum",
          description:
            "An area that can keep being divided and divided infinitely; no individual particles",
          link: "https://youtu.be/tlQzJoJfTlA?si=dv5u_LIGcp9wBw94",
        },
        {
          key: 39,
          heading: "Electrochemistry | Electrochemical cell/Galvanic Cell /Voltaic cell",
          description:
            "Exploring the mechanics of electrochemical cells, including Galvanic and Voltaic cells, and discovering how they convert chemical energy into electrical energy.",
          link: "https://youtu.be/1BB0RKm-30A?si=yLi9st0MBtUP8HXK",
        },
        {
          key: 40,
          heading: "Electrochemistry | Electrode Potential | Standard Electrode Potential",
          description:
            "The concepts of electrode potential and standard electrode potential",
          link: "https://youtu.be/qsoXoHvIbK8?si=_3_qJbIQa-0Vj2QR",
        },
        {
          key: 41,
          heading: "Electrochemistry | Nernst equation",
          description:
            "Nernst equation, the relationship between electrode potential and the concentration of electrolyte.",
          link: "https://youtu.be/RK7EF7HdT1E?si=J1GU94yb8aovij05",
        },
        {
          key: 42,
          heading: "Electrochemistry | Nernst Equation Numerical | Electrochemical cell numerical",
          description:
            "Numerical problems based on Nernst Equation and Electrochemical cell.",
          link: "https://youtu.be/uKyqmamg9EM?si=lxqerJKsPdrUxtnb",
        },
        {
          key: 43,
          heading: "Electrochemistry | Nernst equation application | How to find pH with the help of Nernst Equation",
          description:
            "Discover how to determine pH using the Nernst Equation.",
          link: "https://youtu.be/lxiRaJwVKQ8?si=wR-cDOyfr-9eC_HF",
        },
        {
          key: 44,
          heading: "Electrochemistry | Nernst equation application | How to calculate equilibrium constant",
          description:
            "Nernst equation & its application to calculate equilibrium constants.",
          link: "https://youtu.be/MNkgAMRWavY?si=6DGBWzknsNxviJVJ",
        },
        {
          key: 45, 
          heading: "Electrochemistry | Nernst Equation Application | Electrochemistry Numerical | Nernst Equation Numerical",
          description:
            "The practical application of the Nernst Equation in electrochemistry through numerical examples.",
          link: "https://youtu.be/5lT9aHchL-U?si=N1gvhMsioRJVg2l0",
        },
        {
          key: 46,
          heading: "Electrochemistry | Reaction Feasibility electrode potentials | Electrochemistry numerical",
          description:
            "Reaction feasibility and electrode potentials through numerical examples.",
          link: "https://youtu.be/3-DDwV2zB0o?si=JLa8vkxkVSFPKRWz",
        },
        {
          key: 47,
          heading: "Electrochemistry | Reaction is feasible or not | Electrochemistry numerical",
          description:
            "Exploring electrochemical reactions and finding out if they are feasible or not.",
          link: "https://youtu.be/PwdFFfH8YxM?si=0_zcnqoytoq4c41x",
        },
        {
          key: 48,
          heading: "Electrochemistry | Classification | Type Of Cell | Electrochemical | Electrolytic | Primary &  Secondary Cell",
          description:
            "The classification and types of electrochemical cells, including electrolytic, primary, and secondary cells.",
          link: "https://youtu.be/K3MJ3tRydXk?si=vI-FWaKVvjSKV11o",
        },
        {
          key: 49,
          heading: "Electrochemistry | Primary | Dry | Leclanche Cell | Batteries | Construction | Working Application | Disadvantages",
          description:
            "The primary dry Leclanché cell batteries, their construction, working principle, applications, and disadvantages to understand their role in the world of battery technology.",
          link: "https://youtu.be/llEu6IcmkTc?si=JMYv3swwmP99Bxev",
        },
        {
          key: 50,
          heading: "Electrochemistry | Lead Storage battery | Lead Storage Accumulator",
          description:
            "Learn how lead storage accumulators work, their applications, and the science behind their operation.",
          link: "https://youtu.be/AR1zILguU2g?si=WGW8ujYgppz_E637",
        },
        {
          key: 51,
          heading: " Periodic Properties | Effective Nuclear Charge",
          description:
            "The occurrence of the elements with similar properties after certain regular intervals when they are arranged in increasing order of atomic number",
          link: "https://youtu.be/uhRs0REbDhA?si=hY5St_OPrlcE7t03",
        },
        {
          key: 52,
          heading: "Periodic Properties | Variation in s,p,d,f Orbital Energies)",
          description:
            "The basic law governing modern periodic table states that the properties of elements are periodic functions of their atomic number",
          link: "https://youtu.be/VSTqzzTM51M?si=DElFO0t89dve_eH9",
        },
        {
          key: 53,
          heading: "Periodic Properties | Electronic configuration",
          description:
            "Exploring the arrangement of electrons in an atom",
          link: "https://youtu.be/e7ei-gAkH_8?si=T4qMTmd16Awo7K0I",
        },
        {
          key: 54,
          heading: "Periodic Properties | Atomic and ionic sizes",
          description:
            "Exploring the fundamental concepts behind the sizes of atoms and ions",
          link: "https://youtu.be/PNSGx3OLIlk?si=3dQTdAMMoNH74KyH",
        },
        {
          key: 55,
          heading: "Periodic Properties | Electron Affinity",
          description:
            "Demystifying Electron Affinity: Understanding the Attraction of Atoms",
          link: "https://youtu.be/IkjA0xs11Sk?si=MLg2Y2nv0h_SzL6u",
        },
        {
          key: 56,
          heading: "Periodic Properties | Electronegativity",
          description:
            "Decoding Electronegativity: The Power Struggle of Atoms",
          link: "https://youtu.be/IkjA0xs11Sk?si=XXZdW3AsTbn9aI8k",
        },
        {
          key: 57,
          heading: "Periodic Properties | Polarizability and Polarising Power",
          description:
            "The ability of a cation to distort an anion is known as its polarization power and the tendency of the anion to become polarized by the cation is known as its polarizability.",
          link: "https://youtu.be/M33GzJSQMYQ?si=vVISrEICgo29F4e4",
        },
        {
          key: 58,
          heading: " Periodic Properties | Oxidation State and oxidation number",
          description:
            "The oxidation number or state of an atom/ion is the number of electrons an atom/ion that the molecule has either gained or lost compared to the neutral atom.",
          link: "https://youtu.be/VVs66CwHFuc?si=WSdM1GddDiSgA2B9",
        },
        {
          key: 59,
          heading: "Stereochemistry | Introduction",
          description:
            "Basic introduction on Isomerism and Isomers",
          link: "https://youtu.be/2Ou5cPT58MA?si=cPYroBtA_xfEIxZv",
        },
        {
          key: 60,
          heading: "Stereochemistry-Terms used in Optical Activity | Optically Active Compound | Enantiomers",
          description:
            "The ability of a chiral molecule to rotate the plane of plane-polairsed light, measured using a polarimeter",
          link: "https://youtu.be/yVhL3pK4vmc?si=fN-S9ET0IMFIcF86",
        },
        {
          key: 61,
          heading: "Stereochemistry-Diastereomers | Racemic",
          description:
            "Stereoisomers that are not related as object and mirror image and are not enantiomers",
          link: "https://youtu.be/k6Ym6XRp0gY?si=8oRKDCJjuPcHCSR9",
        },
        {
          key: 62,
          heading: "Stereochemistry-Without | With Chiral C-Atom, Biphenyl | Allenes",
          description:
            "About Optically Active compounds without or with Chiral Carbon atom",
          link: "https://youtu.be/mYDwwNosIOU?si=P-x79lLhpXaVmnqX",
        },
        {
          key: 63,
          heading: "Stereochemistry-R S Nomenclature | CIP Rule",
          description:
            "Tricks to find R/S Nomenclature of chiral molecule with example",
          link: "https://youtu.be/pYefUVk6OWU?si=e3QEXSWGNBZB1xFq",
        },
        {
          key: 64,
          heading: "Stereochemistry-Geometrical | Cis-Trans",
          description:
            "Exhibit a type of stereoisomerism where the atoms have different spatial arrangements in three-dimensional space",
          link: "https://youtu.be/WFQwwTr5SVs?si=rfVtioe8G84BdWHX",
        },
        {
          key: 65,
          heading: "Stereochemistry-E Z | Nomenclature Of Geometrical Isomers ",
          description:
            "The orientation of a functional group in a compound",
          link: "https://youtu.be/DftQyhm_FA4?si=NAuQDHpEFhuaBSPt",
        },
        {
          key: 66,
          heading: "Stereochemistry | Chiral drugs ",
          description:
            "Importance of chiral drugs",
          link: "https://youtu.be/l1IIftU0BmU?si=AgrjKExNEmqiFzUo",
        },
        {
          key: 67,
          heading: "Organic Chemistry | Organic reactions",
          description:
            "Chemical reactions involving organic compounds",
          link: "https://youtu.be/61jaFrlLT0M?si=AjCa4Odz7S1Rw_ZN",
        },
        {
          key: 68,
          heading: "Organic Chemistry | Nucleophilic Substitution Reaction ",
          description:
            "A class of organic reactions where one nucleophile replaces another",
          link: "https://youtu.be/2U1xKSEMNkY?si=NFfzztoCppLfASvi",
        },
        {
          key: 69,
          heading: "Organic Chemistry | Substitution reaction",
          description:
            "A chemical reaction during which one functional group is replaced by another functional group in a chemical compound",
          link: "https://youtu.be/h8D3KxHkEyI?si=AQmwpuSjqvrTafZd",
        },
        {
          key: 70,
          heading: "Organic Chemistry | Addition Reaction",
          description:
            " In the simplest of terms of organic chemistry, we can say that an addition reaction is a chemical reaction wherein two or more reactants come together to form a larger single product",
          link: "https://youtu.be/GvrM-0gN_Co?si=RHIvcyaeZi3Pnq5D",
        },
        {
          key: 71,
          heading: "Organic Chemistry | Free Radical Addition Reaction",
          description:
            "A chemical reaction wherein two or more reactants come together to form a larger single product",
          link: "https://youtu.be/flO_UsDd0yY?si=xRQTr0OyNwYyGZjF",
        },
        {
          key: 72,
          heading: "Organic Chemistry | Elimination Reaction",
          description:
            "A type of reaction that is mainly used to transform saturated compounds to unsaturated compounds",
          link: "https://youtu.be/Gv4ri_3Oyak?si=FRU0phVCgx4qTgcN",
        },
        {
          key: 73,
          heading: "Organic Chemistry | Oxidation and Reduction",
          description:
            "A process which involves the addition of oxygen or any electronegative element or the removal of hydrogen or any electropositive element",
          link: "https://youtu.be/OT8EdHHqpnM?si=tTu6ONcS24IcYwiV",
        },
        {
          key: 74,
          heading: "Organic Chemistry | Cyclization",
          description:
            "Is the formation of a ring in a chemical compound, such as cyclize. It is a noun and a verb with the same meaning",
          link: "https://youtu.be/Z5G94J0-FBk?si=OnV2uRnFCTY7LyWA",
        },
        {
          key: 75,
          heading: "Organic Chemistry | Ring Opening Reaction",
          description:
            "Important transformations that afford a 1,2-halohydrin system with two successive chiral carbon centers",
          link: "https://youtu.be/nQxwkIPDYzg?si=bWKWPWl9iw6MQdjo",
        },
        {
          key: 76,
          heading: "Organic Chemistry | Synthesis ",
          description:
            "The composition or combination of parts or elements so as to form a whole ",
          link: "https://youtu.be/8oQkJpuCsIQ?si=lcMerrsFWO-6ZsXM ",
        },
        {
          key: 77,
          heading: "Organic Chemistry | Aromaticity",
          description:
            "A property of the conjugated cycloalkenes which enhances the stability of a molecule due to the delocalization of electrons present in the π-π orbitals",
          link: "https://youtu.be/bq1PZcKY50o?si=0OgJu2lakHRPy6Jw",
        },
      ],
      
      pyq: [
        {
          key: 1,
          heading: "heading1",
          description: "des1",
        },
      ],
      notes: [
        {
          key: 1,
          heading: "heading1",
          description: "des1",
        },
      ],
    },
  ];

  return tabs;
};

export default Data;
