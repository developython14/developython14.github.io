export const achievementsData = {
  headline: {
    name: "MUSTAPHA",
    subtitle: "Career Achievements & Technical Portfolio",
  },
  topStats: [
    { value: "$16.8M+", label: "Total Impact" },
    { value: "2,250+", label: "Active Users" },
    { value: "65+", label: "Sites Impacted" },
    { value: "33", label: "Achievements" },
  ],
  progression: [
    {
      level: "L3",
      title: "Data Analyst",
      period: "Aug 2024 – Feb 2025",
      count: 17,
    },
    {
      level: "L4",
      title: "Data Developer",
      period: "Feb 2025 – May 2025",
      count: 11,
    },
    {
      level: "L5",
      title: "Solution Development Manager",
      period: "May 2025 – Present",
      count: 5,
    },
  ],
  progressionTagline:
    "L1 → L5 in under 20 months  ·  Top Tier Performance  ·  Consecutive Exceeds Expectations",
  sections: [
    {
      id: "l3",
      level: "L3",
      title: "Data Analyst",
      period: "Aug 2024 – Feb 2025",
      count: 17,
      achievements: [
        {
          id: "L3-01",
          title: "IDRT Quality Improvement",
          description:
            "Created and designed the IDRT (Inventory Discrepancy Resolution Team) reporting framework, including standardized research methodologies and defect tracking reports shared across the SDC network. Trained 4+ analysts on IDRT research processes and scaled the initiative network-wide, achieving substantial quality improvements.",
          metrics: [
            { value: "41%", label: "DPMO Reduction" },
            { value: "14,057→8,242", label: "DPMO Q4'24→Q1'25" },
            { value: "4+", label: "Analysts Trained" },
          ],
        },
        {
          id: "L3-02",
          title: "Shelf A Utilization & Safety",
          description:
            "Led a project to reduce Shelf A utilization by implementing new filters, bin collision protocols, and updated virtual bin configurations. Compiled weekly reports identifying offenders stowing more than 30% of stock on Shelf A, facilitating targeted corrective actions. Enhanced workplace safety by reducing high-risk stowed cases from 15,748 (12%) to 12,938 (2%) between Q2 2024 and Q1 2025.",
          metrics: [
            { value: "12%→2%", label: "High-Risk Stow Cases" },
            { value: "15,748→12,938", label: "Cases Reduced" },
          ],
        },
        {
          id: "L3-03",
          title: "Manual Sort Report",
          description:
            "Designed and implemented a Manual Sort Report tracking sorting accuracy and efficiency across all stations and shifts, enabling performance benchmarking across the SDC network and driving a 20% increase in sorting accuracy.",
          metrics: [{ value: "20%", label: "Sorting Accuracy Increase" }],
        },
        {
          id: "L3-04",
          title: "Case-to-Cage Report",
          description:
            "Developed and maintained a Case-to-Cage Report tracking stowed vs. unstowed quantities across shifts and days, enabling performance benchmarking across the SDC network and driving a 5% improvement in stowing efficiency.",
          metrics: [{ value: "5%", label: "Stowing Efficiency Gain" }],
        },
        {
          id: "L3-05",
          title: "Pick Defects Report",
          description:
            "Designed a Pick Defects Report to identify associates scanning items downstream while leaving them physically in the building, reducing inventory discrepancies and minimizing adjustment errors to strengthen supply chain control.",
          metrics: [],
        },
        {
          id: "L3-06",
          title: "Regional Safety School Report",
          description:
            "Developed and implemented a weekly Safety School reporting system across 14+ SDC sites, identifying associates requiring safety training and analyzing compliance rates by site and employee level. Improved network-wide compliance from 74% to 97% and facilitated the safety training of over 13,000 associates.",
          metrics: [
            { value: "74%→97%", label: "Compliance Rate" },
            { value: "13,000+", label: "Associates Trained" },
            { value: "14+", label: "SDC Sites" },
          ],
        },
        {
          id: "L3-07",
          title: "Daily Permission Lost Report",
          description:
            "Owned the Daily Permission Lost Report, tracking and highlighting lost permissions costing $540 each. Saved 30 permissions, generating $16,200 in cost savings and positioning the site as a top performer in the network.",
          metrics: [
            { value: "$16,200", label: "Cost Savings" },
            { value: "30", label: "Permissions Saved" },
          ],
        },
        {
          id: "L3-08",
          title: "Facility Configuration & Safety Optimization",
          description:
            "Managed daily bin configurations across 21,700+ bins — creating, removing, locking, and unlocking bins and bays — to optimize storage utilization. Redesigned the clustering distribution system, expanding from 10 to 37 clusters and creating 50+ pick areas, enabling more granular associate staffing allocation and significantly reducing PIT incident risk. Implemented the 8-unique-ASIN filter at the A-level in a reserve-type building — resulting in a notable reduction of back injuries among associates.",
          metrics: [
            { value: "21,700+", label: "Bins Managed" },
            { value: "10→37", label: "Clusters Expanded" },
            { value: "50+", label: "Pick Areas Created" },
          ],
        },
        {
          id: "L3-09",
          title: "ICQA & Learning Department Web Pages",
          description:
            "Created and maintained web pages for the ICQA and Learning departments using HTML and CSS, including job position descriptions, Learning Ambassador resources, role standards, and operational documentation — ensuring information was current, accessible, and aligned with organizational standards.",
          metrics: [],
        },
        {
          id: "L3-10",
          title: "VBA Automation Tools",
          description:
            "Developed multiple VBA automation tools to streamline operational reporting across 15+ sites, including hourly spending tracking across 15+ paths per associate, automated weekly cost reports by path, and a trainer reporting tool that generated and emailed training hours — reducing manual reporting effort and enabling data-driven budgeting decisions.",
          metrics: [
            { value: "15+", label: "Sites Covered" },
            { value: "15+", label: "Paths Tracked" },
          ],
        },
        {
          id: "L3-11",
          title: "Ship Failed Moves Alert System",
          description:
            "Created and launched a real-time alert system for ship failed moves using Python and VBA, integrating Slack API webhooks to notify managers and PAs of defects instantly — enabling prompt issue resolution and reducing operational delays.",
          metrics: [],
        },
        {
          id: "L3-12",
          title: "Bin Consolidation Dashboard & Deadwood Detection",
          description:
            "Developed a QuickSight dashboard for bin consolidation tracking last pick and stow dates for each pallet bin across 15 sites, identifying underutilized bins and deadwood pallets. Built an automated system for identifying deadwood pallets and pallet locations with defects, leading to the discovery of over 225 unused pick locations that had been dormant since the launch of HGR5.",
          metrics: [
            { value: "225+", label: "Dormant Locations Found" },
            { value: "15", label: "Sites Covered" },
          ],
        },
        {
          id: "L3-13",
          title: "VBA Staffing Tool",
          description:
            "Developed a VBA staffing tool to assist senior operations managers in balancing inbound and outbound team headcount, ensuring alignment with network goals and enabling informed staffing decisions.",
          metrics: [],
        },
        {
          id: "L3-14",
          title: "SQL Staffing Automation",
          description:
            "Developed a SQL automation tool that replaced manual staffing processes, accurately cleaning and managing SBC lists — reducing operational costs by up to $3 million. Expanded the tool to automate locating missing cases at HGR5, resulting in a 400% increase in accuracy for case location and a 68.7% improvement in overall rate efficiency.",
          metrics: [
            { value: "$3M", label: "Cost Savings" },
            { value: "400%", label: "Accuracy Increase" },
            { value: "68.7%", label: "Rate Efficiency Gain" },
          ],
        },
        {
          id: "L3-15",
          title: "SQL Quality & Utilization Tracking",
          description:
            "Designed and developed a suite of SQL queries to track quality metrics and facility utilization, including module/bay/bin utilization, amenity bin tracking, false picks, shorts, cycle count discrepancies, and key quality indicators (UCO, GIA, Pick Shortage, DPMO) — enabling real-time error detection and data-driven quality improvements.",
          metrics: [],
        },
        {
          id: "L3-16",
          title: "Building Launch Support",
          description:
            "Assisted in launching a new building (similar to YHM2) by training operational teams on quality metrics, tools, and bin configurations — ensuring adherence to operational standards and optimizing workflow efficiency across all processes.",
          metrics: [],
        },
        {
          id: "L3-17",
          title: "New Operational Area & Containers",
          description:
            "Created and integrated a new operational area and 20+ containers, including vehicles, into the existing system to expand capacity and optimize workflow.",
          metrics: [{ value: "20+", label: "Containers Added" }],
        },
      ],
    },
    {
      id: "l4",
      level: "L4",
      title: "Data Developer",
      period: "Feb 2025 – May 2025",
      count: 11,
      achievements: [
        {
          id: "L4-01",
          title: "Quantum Staffing Board (QSB)",
          description:
            "Solo-designed, architected, and deployed the Quantum Staffing Board — a full-stack digital staffing platform enabling operations leaders to staff associates in real time, track permissions, and optimize workforce allocation across the SDC network. Built and evolved over ~2 years as the sole engineer.",
          techStack: [
            "Django",
            "Django REST API",
            "Python",
            "PostgreSQL RDS (Multi-AZ, 120M+ rows)",
            "AWS ElastiCache Redis",
            "EC2 Auto Scaling + ALB",
            "AWS Lambda",
            "ECS Fargate (5 containers)",
            "S3 → Redshift → QuickSight",
            "Midway → AAA Auth + CloudAuth + LDAP",
            "CodeCommit → CodeBuild → CodeDeploy",
            "Locust Load Testing",
          ],
          metrics: [
            { value: "$9.3M", label: "NPV Network-Wide" },
            { value: "$900K", label: "Annual Savings at HGR5" },
            { value: "$831K", label: "Permission-Loss Reduction" },
            { value: "2,888 hrs", label: "Manager Hours Eliminated/Site/Year" },
            { value: "1,000+", label: "Active Leaders" },
            { value: "10K TPS", label: "Throughput Achieved" },
          ],
        },
        {
          id: "L4-02",
          title: "SQPR Quality Dashboard",
          description:
            "Designed, built, and scaled the SQPR (Stow Quality Performance Report) interactive quality metrics dashboard — a network-wide quality defect tracking and management platform serving 65 sites across the US, Canada, and Europe spanning SDC, RDC, SSD, and SSDC networks. Onboarded 19 new buildings. Discovered and fixed a critical data integrity issue where Excel was silently truncating data beyond 1,048,576 rows — redesigned the entire pipeline with automated Andes extract jobs.",
          techStack: [
            "Andes (DataNet)",
            "AWS Redshift",
            "AWS QuickSight (SPICE)",
            "7 automated DataNet jobs",
            "3.4M+ rows across 7 datasets",
          ],
          metrics: [
            { value: "$1.9M", label: "Network Cost Savings (Q3 2025)" },
            { value: "$246,978", label: "Savings at HGR5" },
            { value: "7,204 hrs", label: "Labor Hours Saved" },
            { value: "65 sites", label: "3 Countries" },
            { value: "19", label: "New Buildings Onboarded" },
            { value: "1,000+", label: "Active Users" },
          ],
        },
        {
          id: "L4-03",
          title: "Warehouse Fullness Heatmap",
          description:
            "Designed and deployed an event-driven warehouse fullness visualization tool for HGR5, displaying utilization by bay and aisle as an interactive heatmap on site screens to help stowers identify the right aisles for stowing. Refreshes every 4 hours automatically.",
          techStack: [
            "Flask",
            "Pandas",
            "Matplotlib",
            "EC2",
            "S3 → EventBridge → ECS Fargate",
          ],
          metrics: [],
        },
        {
          id: "L4-04",
          title: "Loss Prevention Desktop Tool (LDP)",
          description:
            "Designed and deployed a desktop software solution serving multiple departments (Loss Prevention, ICQA, ISS, and Operations) that efficiently identifies and maps product group locations across 200K+ bins. Demonstrated immediate value during the HVR project, enabling teams to efficiently locate high-value items, generate pick paths, and facilitate restowing in designated HVR aisles.",
          techStack: ["PyQt", "Matplotlib", "Andes", "SharePoint API"],
          metrics: [
            { value: "8 sites", label: "Deployed" },
            { value: "200K+", label: "Bins Searchable" },
            { value: "4", label: "Departments Served" },
          ],
        },
        {
          id: "L4-05",
          title: "Atlas (Fennec) — Real-Time Employee Tracking",
          description:
            "Designed and built Atlas as a sub-application within the Quantum platform — a real-time employee location tracking system that enables operations leaders to monitor stowers, pickers, and counters across the warehouse floor. Replaced legacy TNS tools with superior filtering and capacity.",
          techStack: [
            "React.js + Redux (Vite)",
            "Django",
            "PostgreSQL + Redis",
            "PySpear",
            "AFT Scuba",
          ],
          metrics: [
            { value: "18+", label: "SDC/SSDC Buildings" },
            { value: "4M+", label: "Bins Filterable" },
            { value: "250", label: "Active Users" },
          ],
        },
        {
          id: "L4-06",
          title: "CPH / Indirect Path Dashboard",
          description:
            "Created and deployed an interactive dashboard tracking CPH (Cases Per Hour) and hours spent in indirect paths, providing visibility to site leaders, regional leaders, and network directors to track spending and identify optimization opportunities.",
          techStack: ["Andes (DataNet)", "AWS Redshift", "QuickSight (SPICE)"],
          metrics: [
            { value: "$3.6M", label: "Projected Annual Savings" },
            { value: "50→75", label: "CPLH Improvement" },
            { value: "~$10K/day", label: "Daily Savings" },
            { value: "8K→5K", label: "Daily Network Hours Reduced" },
          ],
        },
        {
          id: "L4-07",
          title: "Auto Gatekeeping — ML-Driven Missing Case Detection",
          description:
            "Designed and scaled an automated gatekeeping system using machine learning to predict the most likely locations of missing cases by analyzing container history and stow trails. Evolved from Python script → validation → QuickSight dashboard across 10 SDC sites. Replaced manual data collection by 2 associates per shift with an automated ML-driven system.",
          techStack: [
            "Logistic Regression",
            "Linear Regression",
            "Python",
            "Andes → DataNet → Redshift → QuickSight",
          ],
          metrics: [
            { value: "$3M", label: "Annual Cost Savings" },
            { value: "85K→20K", label: "Monthly Defects (76%↓)" },
            { value: "7.5%→30%", label: "Count Accuracy (400%↑)" },
            { value: "68.7%", label: "Rate Efficiency Improvement" },
            { value: "#1 site", label: "SDC Network Count Accuracy" },
          ],
        },
        {
          id: "L4-08",
          title: "Overhang Audit Dashboard",
          description:
            "Designed and deployed a dedicated QuickSight dashboard for auditing overhang cases — cases protruding from shelves/bins creating safety hazards. Built complex SQL queries to reconstruct the full history of bin touches to identify the last associate who interacted with each bin.",
          techStack: [
            "Andes (DataNet)",
            "AWS Redshift",
            "QuickSight (SPICE)",
            "Complex SQL joins",
          ],
          metrics: [],
        },
        {
          id: "L4-09",
          title: "Shredder Three-Eye — Cage Change Time Dashboard",
          description:
            "Designed and deployed a QuickSight dashboard tracking cage change time — the time associates take between cages during stow and pick operations. Built complex SQL queries with 30-minute threshold logic to calculate accurate cage change durations and identify process bottlenecks.",
          techStack: ["Andes (DataNet)", "AWS Redshift", "QuickSight (SPICE)"],
          metrics: [],
        },
        {
          id: "L4-10",
          title: "Stow Compliance & Zone-Based Optimization",
          description:
            "Designed and implemented a network-wide stow compliance tracking and zone-based optimization system providing daily reports on Zone Base stow compliance and standard deviation between VNAs, Bays, and bottom/top levels. Created a novel compliance metric using sigma and standard deviation.",
          techStack: ["Andes (DataNet)", "AWS Redshift", "QuickSight (SPICE)"],
          metrics: [
            { value: "$5.14M", label: "Space Value (297K cu ft)" },
            { value: "$1.1M", label: "Verified Savings Q3 2025" },
            { value: "$777K/mo", label: "Monthly Savings (Finance)" },
            { value: "+20%", label: "CPLH at HGR5" },
            { value: "+10%", label: "Network Top-Level Fullness" },
            { value: "$388.7K", label: "Labor Savings (10K hrs)" },
          ],
        },
        {
          id: "L4-11",
          title: "Safety Network Report API",
          description:
            "Designed and deployed a Django REST API web service hosted on EC2 to serve safety network reports across the SDC network. Standardized safety reporting and drove network-wide data-driven safety decision-making.",
          techStack: ["Django REST API", "Python", "EC2", "PostgreSQL"],
          metrics: [],
        },
      ],
    },
    {
      id: "l5",
      level: "L5",
      title: "Solution Development Manager",
      period: "May 2025 – Present",
      count: 5,
      achievements: [
        {
          id: "L5-01",
          title: "Leadership, Mentorship & Onboarding",
          description:
            "Demonstrated consistent leadership across L3, L4, and L5 by mentoring 3 AM interns (100% return offer rate), onboarding 3 Data Analysts, creating standardized training programs, and supporting 20+ operations managers from different networks in tool adoption. Reduced ramp-up time to productive within 2 months.",
          metrics: [
            { value: "100%", label: "Intern Return Offer Rate (3/3)" },
            { value: "6+", label: "Analysts Onboarded & Trained" },
            { value: "20+", label: "Ops Managers Supported" },
            { value: "2 months", label: "Productive Ramp-Up Time" },
          ],
        },
        {
          id: "L5-02",
          title: "Direct Report Development & Coaching",
          description:
            "As direct manager of 2 L3 Data Analysts (Marco and Adam), established structured development plans, set baseline expectations, and guided both reports through technical skill-building and project delivery. Marco built the IRDR tool to MVP level and a UCO QuickSight Dashboard. Ensured IRDR research is completed by EOD Wednesday each week — establishing clear accountability cadence.",
          metrics: [],
        },
        {
          id: "L5-03",
          title: "Cross-Functional Technical Enablement",
          description:
            "Extended technical leadership beyond direct reports by enabling cross-functional team members — Process Assistants, Area Managers, and Safety Representatives — to build and deploy their own tools and systems. Supported an L3 PA to develop his first web application, enabled outbound traffic automation through Quantum, and extended safety reporting reach across the network.",
          metrics: [],
        },
        {
          id: "L5-04",
          title: "Task Assignment Tool",
          description:
            "Designed and developed a Task Assignment Tool for managing L3 Data Analyst projects and tasks — enabling structured work management with built-in efficiency tracking and accountability metrics. Features include deadline management, budget time allocation, timer controls (pause for breaks), and weekly Time on Task / Time to Delivery metrics.",
          techStack: ["Django (Quantum platform)", "PostgreSQL"],
          metrics: [],
        },
        {
          id: "L5-05",
          title: "Technical Deliverables & Network Expansion",
          description:
            "Driving the expansion of all core platforms from SDC-only to multi-network coverage. Built the RDC Shift Planner (12 sites, 100+ roles, 8+ SQL jobs). Expanded HeroGare/Atlas to 30+ buildings with 4M+ rows/day pipeline. Integrated all RDC + Canadian sites into SQPR and Overhang dashboards.",
          techStack: [
            "Django",
            "React.js",
            "PostgreSQL",
            "AWS Redshift",
            "QuickSight",
            "ECS Fargate",
          ],
          metrics: [
            { value: "+75%", label: "Quantum Sites (16→28)" },
            { value: "+67%", label: "Atlas Buildings (18→30)" },
            { value: "4M+", label: "Rows/Day Pipeline" },
            { value: "12", label: "RDC Sites (New Build)" },
          ],
        },
      ],
    },
  ],
};
