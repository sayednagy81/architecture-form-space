/**
 * CHING ARCHITECTURAL HUB - 3D WEBGL STUDIO
 * Interactive 3D visualizer using Three.js for architectural geometric concepts
 */

class Arch3DStudio {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    if (!this.container) return;

    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.controls = null;
    this.currentModelGroup = null;
    this.gridHelper = null;
    this.axesHelper = null;
    this.renderMode = 'blueprint'; // 'blueprint' | 'solid' | 'xray'
    this.autoRotate = true;
    this.animationFrameId = null;

    this.init();
  }

  init() {
    const width = this.container.clientWidth || 800;
    const height = this.container.clientHeight || 550;

    // Scene
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x0a1428); // Blueprint navy

    // Camera
    this.camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    this.camera.position.set(15, 12, 18);

    // Renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.container.innerHTML = '';
    this.container.appendChild(this.renderer.domElement);

    // OrbitControls
    if (typeof THREE.OrbitControls !== 'undefined') {
      this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
      this.controls.enableDamping = true;
      this.controls.dampingFactor = 0.05;
      this.controls.maxPolarAngle = Math.PI / 2 + 0.1; // allow slight downward tilt
    }

    // Grid & Coordinates
    this.gridHelper = new THREE.GridHelper(30, 30, 0x00d2ff, 0x1e3a5f);
    this.gridHelper.position.y = -0.01;
    this.scene.add(this.gridHelper);

    this.axesHelper = new THREE.AxesHelper(6);
    this.scene.add(this.axesHelper);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    this.scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0x38bdf8, 1.2);
    dirLight1.position.set(20, 30, 20);
    dirLight1.castShadow = true;
    this.scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x818cf8, 0.6);
    dirLight2.position.set(-20, -10, -20);
    this.scene.add(dirLight2);

    // Handle Resize
    window.addEventListener('resize', () => this.onResize());

    // Group for dynamic models
    this.currentModelGroup = new THREE.Group();
    this.scene.add(this.currentModelGroup);

    // Load initial model: Volume & Space
    this.loadConcept('volume');

    // Start render loop
    this.animate();
  }

  onResize() {
    if (!this.container || !this.renderer || !this.camera) return;
    const width = this.container.clientWidth;
    const height = this.container.clientHeight || 550;
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }

  animate() {
    this.animationFrameId = requestAnimationFrame(() => this.animate());

    if (this.controls) {
      this.controls.update();
    }

    if (this.autoRotate && this.currentModelGroup) {
      this.currentModelGroup.rotation.y += 0.005;
    }

    this.renderer.render(this.scene, this.camera);
  }

  getMaterial(color = 0x00d2ff, opacity = 1.0) {
    if (this.renderMode === 'blueprint') {
      return new THREE.MeshStandardMaterial({
        color: color,
        wireframe: false,
        roughness: 0.2,
        metalness: 0.8,
        transparent: true,
        opacity: 0.85
      });
    } else if (this.renderMode === 'xray') {
      return new THREE.MeshPhysicalMaterial({
        color: color,
        roughness: 0.1,
        transmission: 0.9,
        thickness: 1.2,
        transparent: true,
        opacity: 0.45,
        wireframe: false
      });
    } else { // solid
      return new THREE.MeshStandardMaterial({
        color: color,
        roughness: 0.5,
        metalness: 0.1
      });
    }
  }

  getWireframeOverlay(geometry, color = 0xffffff) {
    const wireframe = new THREE.WireframeGeometry(geometry);
    const line = new THREE.LineSegments(wireframe);
    line.material.color.setHex(color);
    line.material.transparent = true;
    line.material.opacity = 0.5;
    return line;
  }

  clearModel() {
    while (this.currentModelGroup.children.length > 0) {
      const obj = this.currentModelGroup.children[0];
      this.currentModelGroup.remove(obj);
      if (obj.geometry) obj.geometry.dispose();
      if (obj.material) {
        if (Array.isArray(obj.material)) obj.material.forEach(m => m.dispose());
        else obj.material.dispose();
      }
    }
    this.currentModelGroup.rotation.set(0, 0, 0);
  }

  loadConcept(conceptName) {
    this.clearModel();

    switch (conceptName) {
      case 'point':
        this.buildPointConcept();
        break;
      case 'line':
        this.buildLineConcept();
        break;
      case 'plane':
        this.buildPlaneConcept();
        break;
      case 'volume':
        this.buildVolumeConcept();
        break;
      case 'interlocking':
        this.buildInterlockingConcept();
        break;
      case 'centralized':
        this.buildCentralizedConcept();
        break;
      case 'datum':
        this.buildDatumConcept();
        break;
      default:
        this.buildVolumeConcept();
    }
  }

  // 1. Point Concept (Two focal points & implied axis)
  buildPointConcept() {
    const group = new THREE.Group();

    // Two glowing spheres
    const geo = new THREE.SphereGeometry(0.8, 32, 32);
    const mat = this.getMaterial(0x38bdf8);

    const p1 = new THREE.Mesh(geo, mat);
    p1.position.set(-5, 3, 0);
    p1.add(this.getWireframeOverlay(geo, 0xffffff));

    const p2 = new THREE.Mesh(geo, mat);
    p2.position.set(5, 3, 0);
    p2.add(this.getWireframeOverlay(geo, 0xffffff));

    // Implied Axis line with dashed geometry
    const lineGeo = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(-5, 3, 0),
      new THREE.Vector3(5, 3, 0)
    ]);
    const lineMat = new THREE.LineDashedMaterial({
      color: 0xfacc15,
      dashSize: 0.5,
      gapSize: 0.3
    });
    const line = new THREE.Line(lineGeo, lineMat);
    line.computeLineDistances();

    // Vertical ground projections
    const projGeo1 = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(-5, 3, 0), new THREE.Vector3(-5, 0, 0)
    ]);
    const projGeo2 = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(5, 3, 0), new THREE.Vector3(5, 0, 0)
    ]);
    const projMat = new THREE.LineBasicMaterial({ color: 0x00d2ff, transparent: true, opacity: 0.4 });
    const pr1 = new THREE.Line(projGeo1, projMat);
    const pr2 = new THREE.Line(projGeo2, projMat);

    group.add(p1, p2, line, pr1, pr2);
    this.currentModelGroup.add(group);
  }

  // 2. Line Concept (Row of linear columns forming a colonnade/edge)
  buildLineConcept() {
    const group = new THREE.Group();
    const colGeo = new THREE.CylinderGeometry(0.35, 0.35, 7, 24);
    const beamGeo = new THREE.BoxGeometry(14, 0.6, 1.2);

    for (let x = -6; x <= 6; x += 3) {
      const col = new THREE.Mesh(colGeo, this.getMaterial(0x38bdf8));
      col.position.set(x, 3.5, 0);
      col.add(this.getWireframeOverlay(colGeo, 0x00ffff));
      group.add(col);
    }

    const beam = new THREE.Mesh(beamGeo, this.getMaterial(0x0284c7));
    beam.position.set(0, 7.3, 0);
    beam.add(this.getWireframeOverlay(beamGeo, 0xffffff));
    group.add(beam);

    this.currentModelGroup.add(group);
  }

  // 3. Plane Concept (Base plane, elevated plane, vertical wall with openings, overhead canopy)
  buildPlaneConcept() {
    const group = new THREE.Group();

    // Elevated base plane
    const baseGeo = new THREE.BoxGeometry(12, 0.8, 10);
    const baseMesh = new THREE.Mesh(baseGeo, this.getMaterial(0x1e3a5f));
    baseMesh.position.set(0, 0.4, 0);
    baseMesh.add(this.getWireframeOverlay(baseGeo, 0x38bdf8));

    // Vertical wall with opening (doorway)
    const wallLeftGeo = new THREE.BoxGeometry(4, 6, 0.4);
    const wallLeft = new THREE.Mesh(wallLeftGeo, this.getMaterial(0x0284c7));
    wallLeft.position.set(-4, 3.8, 0);
    wallLeft.add(this.getWireframeOverlay(wallLeftGeo, 0xffffff));

    const wallRightGeo = new THREE.BoxGeometry(4, 6, 0.4);
    const wallRight = new THREE.Mesh(wallRightGeo, this.getMaterial(0x0284c7));
    wallRight.position.set(4, 3.8, 0);
    wallRight.add(this.getWireframeOverlay(wallRightGeo, 0xffffff));

    const lintelGeo = new THREE.BoxGeometry(4, 1.5, 0.4);
    const lintel = new THREE.Mesh(lintelGeo, this.getMaterial(0x0284c7));
    lintel.position.set(0, 6.05, 0);
    lintel.add(this.getWireframeOverlay(lintelGeo, 0xffffff));

    // Overhead plane (floating canopy)
    const roofGeo = new THREE.BoxGeometry(14, 0.4, 12);
    const roofMesh = new THREE.Mesh(roofGeo, this.getMaterial(0x38bdf8, 0.7));
    roofMesh.position.set(0, 7.5, 0);
    roofMesh.add(this.getWireframeOverlay(roofGeo, 0xffffff));

    group.add(baseMesh, wallLeft, wallRight, lintel, roofMesh);
    this.currentModelGroup.add(group);
  }

  // 4. Volume & Subtractive Transformation (Solid mass with carved portal & courtyard)
  buildVolumeConcept() {
    const group = new THREE.Group();

    // Main cubic mass with architectural articulation
    const bodyGeo = new THREE.BoxGeometry(8, 6, 8);
    const bodyMesh = new THREE.Mesh(bodyGeo, this.getMaterial(0x0369a1));
    bodyMesh.position.set(0, 3, 0);
    bodyMesh.add(this.getWireframeOverlay(bodyGeo, 0x38bdf8));

    // Carved entrance portal (dark recessed void)
    const portalVoidGeo = new THREE.BoxGeometry(2.5, 3.5, 2.5);
    const portalVoidMat = new THREE.MeshStandardMaterial({
      color: 0x051329,
      roughness: 0.9,
      metalness: 0.1
    });
    const portalVoid = new THREE.Mesh(portalVoidGeo, portalVoidMat);
    portalVoid.position.set(0, 1.75, 3.0);

    // Carved rooftop terrace/atrium
    const terraceGeo = new THREE.BoxGeometry(4, 2, 4);
    const terrace = new THREE.Mesh(terraceGeo, portalVoidMat);
    terrace.position.set(2, 5.2, -2);

    group.add(bodyMesh, portalVoid, terrace);
    this.currentModelGroup.add(group);
  }

  // 5. Interlocking Spaces (Two overlapping volumes sharing a common threshold)
  buildInterlockingConcept() {
    const group = new THREE.Group();

    // Volume A (Cyan)
    const geoA = new THREE.BoxGeometry(6, 5, 6);
    const meshA = new THREE.Mesh(geoA, this.getMaterial(0x00d2ff, 0.7));
    meshA.position.set(-2, 2.5, 0);
    meshA.add(this.getWireframeOverlay(geoA, 0xffffff));

    // Volume B (Purple)
    const geoB = new THREE.BoxGeometry(6, 6, 6);
    const meshB = new THREE.Mesh(geoB, this.getMaterial(0x8338ec, 0.7));
    meshB.position.set(2, 3, 1);
    meshB.add(this.getWireframeOverlay(geoB, 0xffffff));

    group.add(meshA, meshB);
    this.currentModelGroup.add(group);
  }

  // 6. Centralized Organization with Dome
  buildCentralizedConcept() {
    const group = new THREE.Group();

    // Central core rotunda
    const coreGeo = new THREE.CylinderGeometry(3.5, 3.5, 6, 32);
    const core = new THREE.Mesh(coreGeo, this.getMaterial(0x38bdf8));
    core.position.set(0, 3, 0);
    core.add(this.getWireframeOverlay(coreGeo, 0xffffff));

    // Dome on top
    const domeGeo = new THREE.SphereGeometry(3.5, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2);
    const dome = new THREE.Mesh(domeGeo, this.getMaterial(0xfacc15));
    dome.position.set(0, 6, 0);
    dome.add(this.getWireframeOverlay(domeGeo, 0xffffff));

    // 4 radial wings
    const wingGeo = new THREE.BoxGeometry(3, 4, 4);
    const positions = [
      [5, 2, 0], [-5, 2, 0], [0, 2, 5], [0, 2, -5]
    ];
    positions.forEach(pos => {
      const wing = new THREE.Mesh(wingGeo, this.getMaterial(0x0284c7));
      wing.position.set(pos[0], pos[1], pos[2]);
      wing.add(this.getWireframeOverlay(wingGeo, 0x38bdf8));
      group.add(wing);
    });

    group.add(core, dome);
    this.currentModelGroup.add(group);
  }

  // 7. Datum Concept (A strong organizing horizontal linear plane/colonnade ordering irregular forms)
  buildDatumConcept() {
    const group = new THREE.Group();

    // Continuous Datum Wall / Spine
    const datumGeo = new THREE.BoxGeometry(18, 5, 0.6);
    const datumMesh = new THREE.Mesh(datumGeo, this.getMaterial(0xf43f5e));
    datumMesh.position.set(0, 2.5, 0);
    datumMesh.add(this.getWireframeOverlay(datumGeo, 0xffffff));

    // Attached disparate volumes with varied geometries
    // 1. Cylinder
    const cylGeo = new THREE.CylinderGeometry(2, 2, 4, 24);
    const cyl = new THREE.Mesh(cylGeo, this.getMaterial(0x38bdf8));
    cyl.position.set(-6, 2, 3);
    cyl.add(this.getWireframeOverlay(cylGeo, 0xffffff));

    // 2. Tall Prism
    const prismGeo = new THREE.BoxGeometry(3, 7, 3);
    const prism = new THREE.Mesh(prismGeo, this.getMaterial(0x8338ec));
    prism.position.set(0, 3.5, -3);
    prism.add(this.getWireframeOverlay(prismGeo, 0xffffff));

    // 3. Low Cube
    const cubeGeo = new THREE.BoxGeometry(4, 2.5, 4);
    const cube = new THREE.Mesh(cubeGeo, this.getMaterial(0x10b981));
    cube.position.set(6, 1.25, 3);
    cube.add(this.getWireframeOverlay(cubeGeo, 0xffffff));

    group.add(datumMesh, cyl, prism, cube);
    this.currentModelGroup.add(group);
  }

  setRenderMode(mode) {
    this.renderMode = mode;
    // re-trigger current model with new material
    // we can save current model name
  }

  toggleAutoRotate(enable) {
    this.autoRotate = enable;
  }

  resetCamera() {
    if (this.camera && this.controls) {
      this.camera.position.set(15, 12, 18);
      this.controls.target.set(0, 3, 0);
      this.controls.update();
    }
  }
}

window.Arch3DStudio = Arch3DStudio;
